const mongoose = require("mongoose")
const {Ciudades} = require("../models/ciudadesModel")

const getCiudades = async ( req , res , next ) => {

    try {
        const buscarCiudades = await Ciudades.find()
    
        res.json(buscarCiudades)
        
    } catch (error) {
        next({statusText : error.message})
    }
}

const deletCiudades = async ( req , res , next ) => {

    try {
        const {_id} = req.params
    
        await Ciudades.findByIdAndDelete(_id)
    
        const buscarCiudades = await Ciudades.find()
    
        res.json(buscarCiudades)
        
    } catch (error) {
        next({statusText : error.message})
    }
}

const postCiudades = async ( req , res , next ) => {

    try {
        const {nombre , mejor_mes , tiempo} = req.body

        const nuevaCiudad = new Ciudades({nombre , mejor_mes , tiempo})

        await nuevaCiudad.save()

        const buscarCiudades = await Ciudades.find()

        res.json(buscarCiudades)

    } catch (error) {
        next({statusText : error.message})
    }
}

const putCiudades = async ( req , res , next ) => {

    try {
        const {_id , ...datos } = req.body

        await Ciudades.findByIdAndUpdate(_id , datos)

        const buscarCiudades = await Ciudades.find()

        res.json(buscarCiudades)

    } catch (error) {
        next({statusText : error.message})
    }
}




module.exports = {
    getCiudades,
    deletCiudades,
    postCiudades,
    putCiudades
}