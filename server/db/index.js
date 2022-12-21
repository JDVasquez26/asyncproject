const dbConnection = require("./dbconn");
const Plant = require('./Plant')
const Site = require('./Site')

//providing a string for join table(can also add a model)
Plant.belongsToMany(Site, {through:"plants_sites" })
Site.belongsToMany(Plant, {through:"plants_sites" })
// Plant.belongsToMany(Site)
// Site.belongsToMany(Plant)
//needs to do the same thing on the other direction, so 
//that it can have the associations: here's a site get plants, here's a plant get possible sites


module.exports = {
    dbConnection,
    Plant,
    Site
}

//same thing as above, the above is actually an obj and that's why
//we must destructure when trying to access them inside the api routes
// module.exports = {
//     dbConnection: dbConnection,
//     Plant: Plant,
//     Site: Site,
// }