const {API_KEY} = process.env;
const axios = require ('axios');
const { Dogs, Temperaments } = require('../db.js')
const { v4: v4, version } = require('uuid');
const {Op} = require('sequelize')


const getDogs = async (req, res, next) => {
    const {name} = req.query;
    const {temps} = req.query;
    
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
            
            res.json(dogs) //te tiro todos los perros
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