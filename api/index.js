console.clear()
console.log("Iniciando JS")

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { router } = require("./router/router")

const conectar = async () => mongoose.connect("mongodb://127.0.0.1:27017/Viajes")
                .then( () => console.log("Conectando a MongoDB"))
                .catch( err => console.log(err.message))

conectar()

const app = express()

    app.use(cors())
    app.use( express.urlencoded({extended : false}))
    app.use(express.json())
    app.use(router)


app.listen( 3000 , () => console.log("Iniciando Api"))