const RolModel = require('../models/rol.model')

// Obtener todos los roles
exports.getRoles = async (req, res) => {
  try {
    const roles = await RolModel.findAll()
    res.status(200).json(roles)
  } catch (error) {
    res.status(500).json({ 
      error: error, 
      message: 'Error al obtener los roles' 
    })
  }
}

// Obtener rol por id
exports.getRolById = async (req, res) => {
  try {
    const id = req.params.id
    const rol = await RolModel.findByPk(id)
    if (!rol){
      return res.status(404).json({ 
        error: 'Rol no encontrado' 
      })
    }
    res.status(200).json(rol)
  } catch (error) {
    res.status(500).json({ 
      error: error, 
      message: 'Error al obtener el rol' 
    })
  }
}

// Crear nuevo rol
exports.createRol = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body
    const rol = await RolModel.create({ nombre, descripcion })
    res.status(201).json(rol)
  } catch (error) {
    res.status(500).json({ 
      error: error, 
      message: 'Error al crear el rol' 
    })
  }
}

// Actualizar rol
exports.updateRol = async (req, res) => {
  try {
    const id = req.params.id
    const rol = await RolModel.findByPk(id)
    if (!rol){
      return res.status(404).json({ 
        error: 'Rol no encontrado' 
      })
    }

    const { nombre, descripcion } = req.body
    rol.nombre = nombre
    rol.descripcion = descripcion
    await rol.save()
    res.json(rol)
  } catch (error) {
    res.status(500).json({ 
      error: error, 
      message: 'Error al actualizar el rol' 
    })
  }
}

// Eliminar rol
exports.deleteRol = async (req, res) => {
  try {
    const id = req.params.id
    const rol = await RolModel.findByPk(id)
    if (!rol){
      return res.status(404).json({ 
        error: 'Rol no encontrado' 
      })
    }

    await rol.destroy()
    res.status(200).json({ 
      message: 'Rol eliminado correctamente' 
    })
  } catch (error) {
    res.status(500).json({ 
      error: error, 
      message: 'Error al eliminar el rol' 
    })
  }
}
