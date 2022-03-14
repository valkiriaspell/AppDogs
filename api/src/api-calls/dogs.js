const {API_KEY} = process.env;
const axios = require ('axios');
const { Dogs, Temperaments } = require('../db.js')
const { v4: v4, version } = require('uuid');


//////////  ---->    getDOGS   <------ //////////////
const getDogs = async (req, res, next) => {
    let { order, source } = req.query
    let {name} = req.query;
    let {temps} = req.query;
    
    try {            
        let apiDogs = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);              
        apiDogs = apiDogs.data.map(dog =>  {
            return {
                id: dog.id,
                name: dog.name,
                weight: dog.weight.metric.includes("NaN")?dog.weight.metric.replace("NaN", "0"):dog.weight.metric  ,
                height: dog.height.metric.includes("NaN")?dog.height.metric.replace("NaN", "0"):dog.height.metric ,
                source: "API",
                temperament: dog.temperament,
                life_span: dog.life_span,
                image: dog.image.url
            }
        })
        //ici j'ai un tableau avec les chiens d'api
        //
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
            //ici j'ai un tableau avec les chiens d'mon database
            
            let dogs =  [...dbDogs, ...apiDogs];
            //ici j'ai mélangé les deux chiens d'api avec les chiens de ma db
       
        

           
            if (source === "Created") {
                dogs = dogs.filter(d => !d.hasOwnProperty("source")) 
            } 
            if (source === "Real") {
                dogs = dogs.filter(d => d.hasOwnProperty("source")) 
            }
            if(name && name !== "") {
                    
                    dogs = dogs.filter(d => d.name.toLowerCase().includes(name.toLowerCase()))                
                
                          }
                          
            if(temps !== "All") {
            console.log(temps)                               
                        dogs = dogs.filter(d =>d.temperament?d.temperament.includes(temps):false)   
                        
                        
                }
            if(order === "asc" || !order || order === ""){
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
                //pour la recherche par page, par 8 chiens
                return res.send(dogs)                    
               
        }catch(e){
            next(e)
            console.log("No llega a la API o a DB")
        }
        
    }                 

    ////////////////  ---->    createDOG   <------ /////////////////
 
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

////////////////  ---->    getDogById   <------ /////////////////

 const getDogById = async (req, res, next) => {
     const {id} = req.params
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
    
        let dogs =  [...dbDogs, ...apiDogs];
        

    if (id) {
        dogs = dogs.find(e => e.id == id)    
    }
  
    dogs? res.json(dogs) : res.status(400).json({mesagge: 'Not Found'})

 } catch(e) {
    next(e)
    }
}
   

 module.exports = {
     getDogs,     
     createDog,
     getDogById,
 };