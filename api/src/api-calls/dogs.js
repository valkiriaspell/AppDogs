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
        let response = dbDogs.concat(apiDogs);
        res.send(response); 
    } catch (err) {
       next(err);
    }
 } 

 const getDogsbyName = async (req, res, next) => {
    const {raza} = req.query;
    console.log(raza)
    try {
        let response = (await axios(`https://api.thedogapi.com/v1/breeds/search?q=${raza}`)).data;
        response = response.data.map(dog =>  {
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
        res.send(response); 
    } catch (err) {
       next(err);
    }
 } 

 module.exports = {
     getDogs,
     getDogsbyName,
 };