const express = require('express')
const router = express.Router()
const compraController = require('../controllers/compra.controller')

router.get('/compras', compraController.getCompras)
router.get('/compras/:id', compraController.getCompraById)
router.post('/compras', compraController.createCompra)
router.put('/compras/:id', compraController.updateCompra)
router.delete('/compras/:id', compraController.deleteCompra)

module.exports = router
