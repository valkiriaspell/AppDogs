const {API_KEY} = process.env;
const axios = require ('axios');
const { Dogs, Temperaments } = require('../db.js')


const getDogs = async (req, res, next) => {
    const {name} = req.query;
    const {temps} = req.query;
    //junto dogs de la api y de mi db
     try {            
            let apiDogs = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);              
            apiDogs = apiDogs.data.map(dog =>  {
            return {
                    name: dog.name,
                    weight: dog.weight.metric,
                    height: dog.height.metric,
                    name: dog.name,
                    life_span: dog.life_span,
                    image: dog.image.url,
                    temperament: dog.temperament
                }
            })
            
            let dbDogs = await Dogs.findAll({include: Temperaments})
            
            let dogs =  [...dbDogs, ...apiDogs];
            //si me llega name y temps, o alguno de ellos filtro:   (funciona)
            if(name && temps) {
                  
                dogs = await dogs.filter(e => e.name.toLowerCase().includes(name.toLowerCase()) && e.temperament.toLowerCase().includes(temps.toLowerCase()))
                dogs.length > 0? res.json(dogs) : res.status(400).json({mesagge: 'Not Found'})
                }
            
            if(name) {
                    
                    dogs = await dogs.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))                
                dogs.length > 0? res.json(dogs) : res.status(400).json({mesagge: 'Not Found'})
                }
            if(temps) {
                      
                        dogs = await dogs.filter(e => e.temperament.toLowerCase().includes(temps.toLowerCase()))   
                        dogs.length > 0? res.json(dogs) : res.status(400).json({mesagge: 'Not Found'})
                }
            
            res.json(dogs)
        }catch(e){
            next(e)
        }
        
    }                 
       
 
 const createDog = async function (req, res, next) {
    const {name, height, weight, image, life_span, temperament} = req.body
    
    try{
        const newDog = await Dogs.create({
            name,
            height,
            weight,
            image,
            life_span
        });
        await newDog.addTemperaments(temperament)       
        
        return res.json(newDog)
    }catch(e){
        next(e)
    }
}

 
   

 module.exports = {
     getDogs,     
     createDog,
 };