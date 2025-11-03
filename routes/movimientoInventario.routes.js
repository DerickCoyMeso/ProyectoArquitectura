const express = require('express')
const router = express.Router()
const movimientoInventarioController = require('../controllers/movimientoInventario.controller')

router.get('/movimientos-inventario', movimientoInventarioController.getMovimientosInventario)
router.get('/movimientos-inventario/:id', movimientoInventarioController.getMovimientoInventarioById)
router.post('/movimientos-inventario', movimientoInventarioController.createMovimientoInventario)
router.put('/movimientos-inventario/:id', movimientoInventarioController.updateMovimientoInventario)
router.delete('/movimientos-inventario/:id', movimientoInventarioController.deleteMovimientoInventario)

module.exports = router
