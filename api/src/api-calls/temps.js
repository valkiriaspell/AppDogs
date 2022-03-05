const {API_KEY} = process.env;
const axios = require ('axios');
const { Dogs, Temperaments } = require('../db.js')

const saveTemps = async () => {
    try {
        let response = await axios(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);              
        response = response.data;    
        let temps = response.map(dog => dog.temperament).reduce((pre, cur) => pre.concat(cur)).split(", ");
        let uniqueTemps = [];
        for (let i = 0; i < temps.length; i++){
            if (!uniqueTemps.includes(temps[i])) {
                uniqueTemps.push(temps[i])
            }            
        }
        // hasta aqui, uniqueTemps es un array de strings ["friendly","cheerful","etc"] 
        let newTemps = uniqueTemps.map(t=>{
            return {
                name: t,               
            }
        })         
        
        //ahora tengo un array de objetos con [ {name: "string"}, {name: "string"}]
      newTemps = await Promise.all(newTemps.map(t=> Temperaments.findOrCreate({where:t})))       
      console.log("Temperaments successfully loaded" )
     } catch (error) {
        console.log("It didn't work")
        console.log(error)
     }
}
const getTemps = async (req, res, next) => {
    try {
let temps = await Temperaments.findAll()
        res.send(temps)
    } catch (error) {
        console.log(error)
    }
}
       

             
        

 module.exports = {
     saveTemps,
     getTemps
 };