const jwt = require('jsonwebtoken')
const SesionModel = require('../models/sesion.model')
const UsuarioModel = require('../models/usuario.model')
require('dotenv').config()

// Obtener todas las sesiones
exports.getSesiones = async (req, res) => {
  try {
    const sesiones = await SesionModel.findAll()
    res.status(200).json(sesiones)
  } catch (error) {
    res.status(500).json({
      error,
      message: 'Error al obtener las sesiones'
    })
  }
}

// Obtener sesión por ID
exports.getSesionById = async (req, res) => {
  try {
    const id = req.params.id
    const sesion = await SesionModel.findByPk(id)
    if (!sesion) {
      return res.status(404).json({
        error: 'Sesión no encontrada'
      })
    }
    res.status(200).json(sesion)
  } catch (error) {
    res.status(500).json({
      error,
      message: 'Error al obtener la sesión'
    })
  }
}

// Crear sesión
exports.createSesion = async (req, res) => {
  try {
    const { email, password_hash } = req.body

    //Buscar usuario
    const usuario = await UsuarioModel.findOne({ where: { email } })
    if (!usuario) {
      return res.status(404).json({
        message: 'Usuario no encontrado'
      })
    }

    //Validar contraseña
    if (usuario.password_hash !== password_hash) {
      return res.status(401).json({
        message: 'Contraseña incorrecta'
      })
    }

    //Generar token
    const token = jwt.sign(
      { id: usuario.id, nombre: usuario.nombre, email: usuario.email },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_EXPIRES_IN || '2h' }
    )

    //Guardar sesión en la BD
    const sesion = await SesionModel.create({
      usuario_id: usuario.id,
      token,
      fecha_expiracion: new Date(Date.now() + 2 * 60 * 60 * 1000) 
    })

    //Respuesta
    res.status(201).json({
      message: `Inicio de sesión exitoso, bienvenido ${usuario.nombre} ${usuario.apellido || ''}`,
      usuario: {
        id: usuario.id,
        nombre: usuario.nombre,
        email: usuario.email
      },
      token,
      sesion_id: sesion.id
    })
  } catch (error) {
    res.status(500).json({
      error,
      message: 'Error al iniciar sesión'
    })
  }
}

// Eliminar sesión
exports.deleteSesion = async (req, res) => {
  try {
    const id = req.params.id
    const sesion = await SesionModel.findByPk(id)
    if (!sesion) {
      return res.status(404).json({
        error: 'Sesión no encontrada'
      })
    }

    await sesion.destroy()
    res.status(200).json({
      message: 'Sesión cerrada correctamente'
    })
  } catch (error) {
    res.status(500).json({
      error,
      message: 'Error al eliminar la sesión'
    })
  }
}
