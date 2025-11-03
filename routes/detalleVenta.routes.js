const express = require('express')
const router = express.Router()
const detalleVentaController = require('../controllers/detalleVenta.controller')

router.get('/detalle-ventas', detalleVentaController.getDetalleVentas)
router.get('/detalle-ventas/:id', detalleVentaController.getDetalleVentaById)
router.post('/detalle-ventas', detalleVentaController.createDetalleVenta)
router.put('/detalle-ventas/:id', detalleVentaController.updateDetalleVenta)
router.delete('/detalle-ventas/:id', detalleVentaController.deleteDetalleVenta)

module.exports = router
