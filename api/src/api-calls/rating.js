const { Ratings } = require('../db.js')

////////////////  ---->    ratingDog   <------ /////////////////

const ratingDog = async function (req, res, next) {
    const { id, votes } = req.body
    try {      
        let dogFound = await Ratings.findOne({ where: { id: id } })

        if (!dogFound) {
            const newDog = {
                id: id,
                votes: votes,
                totalVotes: 1
            }
            const item = await Ratings.create(newDog)
            
        } else {            

            const newDog = {
                id: id,
                votes: dogFound.votes + votes,
                totalVotes: dogFound.totalVotes + 1
            }
            const update = await Ratings.update(newDog,{ where: { id: id } });
        }
        const allRating = await Ratings.findAll()
        return res.send(allRating)
    } catch (e) {
        next(e)
    }
}

////////////////  ---->    all Dogs's Ratings    <------ /////////////////

const allRateDog = async function (req, res, next) {
    
    try {      
        const allRating = await Ratings.findAll()
        return res.send(allRating)
    } catch (e) {
        next(e)
        console.log(e)
    }
}

module.exports = {
    ratingDog,
    allRateDog
    
};