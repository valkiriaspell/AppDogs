const {API_KEY} = process.env;
const axios = require ('axios');
const { Dogs, Temperaments } = require('../db.js')
const { v4: v4, version } = require('uuid');



const getDogs = async (req, res, next) => {
    let { order, page } = req.query
    let {name} = req.query;
    let {temps} = req.query;
    
    //junto dogs de la api y de mi db
     try {            
            let apiDogs = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);              
            apiDogs = apiDogs.data.map(dog =>  {
            return {
                    id: dog.id,
                    name: dog.name,
                    weight: dog.weight.metric,
                    height: dog.height.metric,
                    name: dog.name,
                    temperament: dog.temperament,
                    life_span: dog.life_span,
                    image: dog.image.url
                }
            })
            //hasta aqui un array con dogs de api
            let dbDogs = await Dogs.findAll({include: Temperaments})
            dbDogs = await  dbDogs.map(({id, name, height, weight, temperaments, image, life_span}) => ({
                id,
                name,
                height,
                weight,
                temperament: temperaments.map(e => e.name).join(', '),
                image,
                life_span
            }))
            
        //hasta aqui array con dogs de db
        console.log("basedogs",dbDogs)
            let dogs =  [...dbDogs, ...apiDogs];
        //junto apidogs y dbdogs
        

            //si me llega name y temps, o alguno de ellos filtro:   (funciona)
            
            if(name && name !== "") {
                    
                    dogs = dogs.filter(d => d.name.toLowerCase().includes(name.toLowerCase()))                
                // dogs.length > 0? res.json(dogs) : res.status(400).json({mesagge: 'Not Found'})
                          }
            if(temps) {
                                           
                        dogs = dogs.filter(d =>d.temperament?d.temperament.toLowerCase().includes(temps.toLowerCase()):false)   
                        
                        // dogs.length > 0? res.json(dogs) : res.status(400).json({mesagge: 'Not Found'})
                }
            else if(order === "asc" || !order || order === ""){
                    dogs = dogs.sort((a,b) =>{
                        return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
                    })
                    // res.json(dogs)
                }else{
                    dogs = dogs.sort((a,b) =>{
                        return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
                    })
                    // res.json(dogs)
                }
                //para el paginado, mostrando de a 8 perros         
                page = page ? page : 1 
                const charXPage = 8;
                let result = dogs.slice((charXPage * (page -  1)) , (charXPage * (page -  1)) + charXPage )
                //
                result.length > 0? res.json(dogs) : res.status(400).json({mesagge: 'Does not exist'})
                // return res.send({
                //     result: result, 
                //     count: dogs.length
                // })
        }catch(e){
            next(e)
        }
        
    }                 
       
 
 const createDog = async function (req, res, next) {
    const {name, height, weight, image, life_span, temperament} = req.body
    
    try{
        const newDog = await Dogs.create({
            id: v4(),
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

 const getDogById = async (req, res, next) => {
     const {id} = req.params
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
        //desde aqui un array con dogs de api
        let dbDogs = await Dogs.findAll({include: Temperaments})
    //desde aqui array con dogs de db
        let dogs =  [...dbDogs, ...apiDogs];
    //junto apidogs y dbdogs
    if (id) {
        dogs = await dogs.find(e => e.id === id)
    res.json(dogs)
    } 
 } catch(e) {
    next(e)
    }
}
   

 module.exports = {
     getDogs,     
     createDog,
     getDogById,
 };