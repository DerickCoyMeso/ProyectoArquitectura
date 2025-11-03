const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuario.controller')

router.get('/usuarios', usuarioController.getUsuarios)
router.get('/usuarios/:id', usuarioController.getUsuarioById)
router.post('/usuarios', usuarioController.createUsuario)
router.put('/usuarios/:id', usuarioController.updateUsuario)
router.delete('/usuarios/:id', usuarioController.deleteUsuario)

module.exports = router
