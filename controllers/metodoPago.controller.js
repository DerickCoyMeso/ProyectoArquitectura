const MetodoPagoModel = require('../models/metodoPago.model')

// Obtener todos los métodos de pago
exports.getMetodosPago = async (req, res) => {
  try {
    const metodos = await MetodoPagoModel.findAll()
    res.status(200).json(metodos)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al obtener los métodos de pago'
    })
  }
}

// Obtener método de pago por id
exports.getMetodoPagoById = async (req, res) => {
  try {
    const id = req.params.id
    const metodo = await MetodoPagoModel.findByPk(id)
    if (!metodo) {
      return res.status(404).json({
        error: 'Método de pago no encontrado en la base de datos'
      })
    }
    res.status(200).json(metodo)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al obtener el método de pago'
    })
  }
}

// Crear nuevo método de pago
exports.createMetodoPago = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body
    const metodo = await MetodoPagoModel.create({ nombre, descripcion })
    res.status(201).json(metodo)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al crear el método de pago'
    })
  }
}

// Actualizar método de pago
exports.updateMetodoPago = async (req, res) => {
  try {
    const id = req.params.id
    const metodo = await MetodoPagoModel.findByPk(id)
    if (!metodo) {
      return res.status(404).json({
        error: 'Método de pago no encontrado en la base de datos'
      })
    }

    const { nombre, descripcion } = req.body
    Object.assign(metodo, { nombre, descripcion })
    await metodo.save()
    res.status(200).json(metodo)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al actualizar el método de pago'
    })
  }
}

// Eliminar método de pago
exports.deleteMetodoPago = async (req, res) => {
  try {
    const id = req.params.id
    const metodo = await MetodoPagoModel.findByPk(id)
    if (!metodo) {
      return res.status(404).json({
        error: 'Método de pago no encontrado en la base de datos'
      })
    }

    await metodo.destroy()
    res.status(200).json({
      message: 'Método de pago eliminado correctamente'
    })
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al eliminar el método de pago'
    })
  }
}
