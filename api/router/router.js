const express = require("express")
const { postUsuario, nuevoUsuario } = require("../controllers/usuariosController")
const { getCiudades, deletCiudades, postCiudades, putCiudades } = require("../controllers/ciudadesController")

const router = express.Router()

router.route("/login")
    .post(postUsuario)


router.route("/ciudades")
    .get(getCiudades)
    .post(postCiudades)
    .put(putCiudades)


router.route("/ciudades/_id/:_id")
    .delete(deletCiudades)


router.route("/registro")
    .post(nuevoUsuario)



router.all("*" , (req , res , next) => {

    const err = new Error()
    err.status = 404
    err.statusText = "404 ENDpoint no encontrado"
    next(err)
})
router.use(( err , req , res , next) => {

    let {status , statusText} = err
    status = status || 500
    statusText = statusText || "500 error interno en la api"
    res.status(status).json({status , statusText})
})









module.exports = {
    router
}