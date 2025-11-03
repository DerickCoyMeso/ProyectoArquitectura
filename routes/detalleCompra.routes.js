const express = require('express')
const router = express.Router()
const detalleCompraController = require('../controllers/detalleCompra.controller')

router.get('/detalle-compras', detalleCompraController.getDetalleCompras)
router.get('/detalle-compras/:id', detalleCompraController.getDetalleCompraById)
router.post('/detalle-compras', detalleCompraController.createDetalleCompra)
router.put('/detalle-compras/:id', detalleCompraController.updateDetalleCompra)
router.delete('/detalle-compras/:id', detalleCompraController.deleteDetalleCompra)

module.exports = router
