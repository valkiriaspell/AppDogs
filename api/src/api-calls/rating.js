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
        return res.json(allRating)
    } catch (e) {
        next(e)
    }
}

module.exports = ratingDog