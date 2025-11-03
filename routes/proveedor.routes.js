const express = require('express')
const router = express.Router()
const proveedorController = require('../controllers/proveedor.controller')

router.get('/proveedores', proveedorController.getProveedores)
router.get('/proveedores/:id', proveedorController.getProveedorById)
router.post('/proveedores', proveedorController.createProveedor)
router.put('/proveedores/:id', proveedorController.updateProveedor)
router.delete('/proveedores/:id', proveedorController.deleteProveedor)

module.exports = router
