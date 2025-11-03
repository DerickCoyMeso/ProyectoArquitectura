const express = require('express')
const router = express.Router()
const bodegaController = require('../controllers/bodega.controller')

router.get('/bodegas', bodegaController.getBodegas)
router.get('/bodegas/:id', bodegaController.getBodegaById)
router.post('/bodegas', bodegaController.createBodega)
router.put('/bodegas/:id', bodegaController.updateBodega)
router.delete('/bodegas/:id', bodegaController.deleteBodega)

module.exports = router
