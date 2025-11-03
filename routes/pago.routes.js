const express = require('express')
const router = express.Router()
const pagoController = require('../controllers/pago.controller')

router.get('/pagos', pagoController.getPagos)
router.get('/pagos/:id', pagoController.getPagoById)
router.post('/pagos', pagoController.createPago)
router.put('/pagos/:id', pagoController.updatePago)
router.delete('/pagos/:id', pagoController.deletePago)

module.exports = router
