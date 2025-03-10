const mongoose = require("mongoose")
const {ciudadesSchema} = require("../schemas/ciudadesSchema")

const Ciudades = mongoose.model( "Ciudades" , ciudadesSchema)

module.exports = {
    Ciudades
}