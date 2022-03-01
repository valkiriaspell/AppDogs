const {API_KEY} = process.env;
const axios = require ('axios');
const { Dogs, Temperaments } = require('../db.js')

const getTemps = async (req, res, next) => {
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
        let dbTemps = await Promise.all( 
                uniqueTemps.map (t => {
                    let dogTemp = {
                        name: t
                    };

            Temperaments.findOrCreate({
            where: dogTemp
            })
        }))
        return res.send(dbTemps)
    }    
    catch (err) {
      next(err);
    }     
} 
        
             
        

 module.exports = {
     getTemps,
 };