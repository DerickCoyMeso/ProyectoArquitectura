const UsuarioModel = require('../models/usuario.model')

// Obtener todos los usuarios
exports.getUsuarios = async (req, res) => {
  try {
    const usuarios = await UsuarioModel.findAll()
    res.status(200).json(usuarios)
  } catch (error) {
    res.status(500).json({ 
      error: error, 
      message: 'Error al obtener los usuarios' 
    })
  }
}

// Obtener usuario por Id
exports.getUsuarioById = async (req, res) => {
  try {
    const id = req.params.id
    const usuario = await UsuarioModel.findByPk(id)
    if (!usuario){
      return res.status(404).json({ 
        error: 'Usuario no encontrado' 
      })
    }
    res.status(200).json(usuario)
  } catch (error) {
    res.status(500).json({ 
      error: error, 
      message: 'Error al obtener el usuario' 
    })
  }
}

// Crear nuevo usuario
exports.createUsuario = async (req, res) => {
  try {
    const { nombre, apellido, email, password_hash, rol_id } = req.body
    const usuario = await UsuarioModel.create({ nombre, apellido, email, password_hash, rol_id })
    res.status(201).json(usuario)
  } catch (error) {
    res.status(500).json({ 
      error: error,
      message: 'Error al crear el usuario'
   })
  }
}

// Actualizar usuario
exports.updateUsuario = async (req, res) => {
  try {
    const id = req.params.id
    const usuario = await UsuarioModel.findByPk(id)
    if (!usuario){
      return res.status(404).json({ 
        error: 'Usuario no encontrado' 
      })
    }

    const { nombre, apellido, email, password_hash, rol_id } = req.body
    Object.assign(usuario, { nombre, apellido, email, password_hash, rol_id })
    await usuario.save()
    res.json(usuario)
  } catch (error) {
    res.status(500).json({ 
      error: error,
      message: 'Error al actualizar el usuario' })
  }
}

// Eliminar usuario
exports.deleteUsuario = async (req, res) => {
  try {
    const id = req.params.id
    const usuario = await UsuarioModel.findByPk(id)
    if (!usuario) {
      return res.status(404).json({ 
        error: 'Usuario no encontrado' 
      })
    }
    await usuario.destroy()
    res.status(200).json({ 
      message: 'Usuario eliminado correctamente' 
    })
  } catch (error) {
    res.status(500).json({ 
      error: error,
      message: 'Error al eliminar el usuario' 
    })
  }
}
