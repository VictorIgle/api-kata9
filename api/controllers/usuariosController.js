const mongoose = require("mongoose")
const {Usuarios} = require("../models/usuariosModel")
const bcrypt = require("bcryptjs")

const postUsuario = async ( req , res ,next) => {

    try {
        const {nombre , password} = req.body

        //Busca al usuario por el nombre
        const buscarUsuario = await Usuarios.findOne({nombre : nombre.toLowerCase()})

        //Si el usuario no existe, login false
        if(!buscarUsuario) {
            return res.status(404).json({login : false , message : "Usuario no encontrado"})
        }

        //Se comparan las contraseñas
        const isMatch = await bcrypt.compare( password , buscarUsuario.password) 
        //Si es distinta, login es false
        if(!isMatch) {
            return res.status(401).json({login : false , message : "Contraseña incorrecta"})
        }
        //Si es correcta, login true
        res.json({login : true})

    } catch (error) {
        next({statusText : error.message})
    }
}

const nuevoUsuario = async ( req , res , next) => {
    try {
        const {nombre , password} = req.body

        //Buscar usurio por nombre
        const usuariosExiste = await Usuarios.findOne({nombre})

        //Comparar si el usuario ya existe
        if(usuariosExiste){
            return res.status(400).json({message : "El nombre de usuario ya esta en uso"})
        }

        //Encriptar contraseña
        const rondas = 10

        const encriptadoContraseña = await bcrypt.hash( password , rondas) 

        //Crear usuario encriptando la contraseña

        const nuevoUsuario = new Usuarios({nombre , password : encriptadoContraseña})

        await nuevoUsuario.save()

        res.status(201).json({message : "Usuario creado con exito" , usuario : {nombre : nuevoUsuario.nombre}})
        
    } catch (error) {
        next({ statusText : error.message})
    }
}





module.exports = {
    postUsuario,
    nuevoUsuario
}