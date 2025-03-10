const mongoose = require("mongoose")

const ciudadesSchema = new mongoose.Schema(
    { nombre : String , mejor_mes : String , tiempo : String},
    { collection : "Ciudades" , versionKey : false }
)


module.exports = {
    ciudadesSchema
}