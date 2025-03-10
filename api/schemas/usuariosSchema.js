const mongoose = require("mongoose")

const usuariosSchema = new mongoose.Schema(
    { nombre : { type : String , required : true , unique : true},
    password : { type : String , required : true} },

    { collection : "Usuarios" , versionKey : false}
)

module.exports = {
    usuariosSchema
}