const mongoose = require("mongoose")
const {usuariosSchema} = require("../schemas/usuariosSchema")

const Usuarios = mongoose.model( "Usuarios" , usuariosSchema)

module.exports = {
    Usuarios
}