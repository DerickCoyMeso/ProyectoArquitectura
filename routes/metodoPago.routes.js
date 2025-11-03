const express = require('express')
const router = express.Router()
const metodoPagoController = require('../controllers/metodoPago.controller')

router.get('/metodos-pago', metodoPagoController.getMetodosPago)
router.get('/metodos-pago/:id', metodoPagoController.getMetodoPagoById)
router.post('/metodos-pago', metodoPagoController.createMetodoPago)
router.put('/metodos-pago/:id', metodoPagoController.updateMetodoPago)
router.delete('/metodos-pago/:id', metodoPagoController.deleteMetodoPago)

module.exports = router
