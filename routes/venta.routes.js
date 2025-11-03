const express = require('express')
const router = express.Router()
const ventaController = require('../controllers/venta.controller')

router.get('/ventas', ventaController.getVentas)
router.get('/ventas/:id', ventaController.getVentaById)
router.post('/ventas', ventaController.createVenta)
router.put('/ventas/:id', ventaController.updateVenta)
router.delete('/ventas/:id', ventaController.deleteVenta)

module.exports = router
