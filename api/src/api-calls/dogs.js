const {API_KEY} = process.env;
const axios = require ('axios');
const { Dogs, Temperaments } = require('../db.js')


const getDogs = async (req, res, next) => {
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
        console.log("dbdogs", dbDogs)
        let response =  [...dbDogs, ...apiDogs];
        res.send(response); 
    } catch (err) {
       next(err);
    }
 }
 
 const createDog = async function (req, res, next) {
    const {name, height, weight, image, life_span, temperaments} = req.body

    try{
        const newDog = await Dogs.create({
            name,
            height,
            weight,
            image,
            life_span
        });
        await newDog.addTemperaments(temperaments)       
        
        return res.send(newDog)
    }catch(e){
        next(e)
    }
}

 const getDogsbyName = async (req, res, next) => {
    const {name} = req.query;
    const {temps} = req.query;
    console.log(name)
    try {
        let apiDogs = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);
        apiDogs = apiDogs.data.map(dog =>  {
            return {
                name: dog.name,
                weight: dog.weight.metric,
                height: dog.height.metric,                    
                life_span: dog.life_span,
                image: dog.image.url,
                temperament: dog.temperament
            }
        })
        // let dbDogs = await Dogs.findAll({
        //     include: [{
        //         Temperaments,
        //         attributes: ['name'],
        //     },],
        //     attributes: ['id', 'name', 'height', 'weight', 'image', 'life_span']
        // })        
        // dbDogs = await dbDogs.map(dog =>  {
        //     return {
        //         name: dog.name,
        //         weight: dog.weight.metric,
        //         height: dog.height.metric,                    
        //         life_span: dog.life_span,
        //         image: dog.image.url,
        //         temperament: dog.temperament
        //     }
        // })
        //         const allDogs = [...dbDogs, ...apiDogs]
                // let dogs = allDogs;
                let dogs = apiDogs;

                console.log(dogs)
                if(name && temps) {
                  
                    dogs = await dogs.filter(e => e.name.toLowerCase().includes(name.toLowerCase()) && e.temperament.toLowerCase().includes(temps.toLowerCase()))
                    if(dogs.length > 0) {
                        return res.send(dogs)
                    }
                }
                if(name) {
                        
                        dogs = await dogs.filter(e => e.name.toLowerCase().includes(name.toLowerCase()))
                    }
                if(temps) {
                          
                            dogs = await dogs.filter(e => e.temperament.toLowerCase().includes(temps.toLowerCase()))   
                    }
                if(dogs.length > 0) {
                    return res.send(dogs)
                }
                res.status(400).json({mesagge: 'Not Found'})
            }catch(e){
                next({message: 'Not Found', error: e})
            }
            
        }        
   

 module.exports = {
     getDogs,
     getDogsbyName,
     createDog,
 };