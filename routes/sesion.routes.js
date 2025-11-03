const express = require('express')
const router = express.Router()
const sesionController = require('../controllers/sesion.controller')

router.get('/sesiones', sesionController.getSesiones)
router.get('/sesiones/:id', sesionController.getSesionById)
router.post('/sesiones', sesionController.createSesion)
router.delete('/sesiones/:id', sesionController.deleteSesion)

module.exports = router
