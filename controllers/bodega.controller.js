const BodegaModel = require('../models/bodega.model')

// Obtener todas las bodegas
exports.getBodegas = async (req, res) => {
  try {
    const bodegas = await BodegaModel.findAll()
    res.status(200).json(bodegas)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al obtener las bodegas'
    })
  }
}

// Obtener bodega por id
exports.getBodegaById = async (req, res) => {
  try {
    const id = req.params.id
    const bodega = await BodegaModel.findByPk(id)
    if (!bodega) {
      return res.status(404).json({
        error: 'Bodega no encontrada en la base de datos'
      })
    }
    res.status(200).json(bodega)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al obtener la bodega'
    })
  }
}

// Crear nueva bodega
exports.createBodega = async (req, res) => {
  try {
    const { nombre, tipo, ubicacion } = req.body
    const bodega = await BodegaModel.create({ nombre, tipo, ubicacion })
    res.status(201).json(bodega)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al crear la bodega'
    })
  }
}

// Actualizar bodega
exports.updateBodega = async (req, res) => {
  try {
    const id = req.params.id
    const bodega = await BodegaModel.findByPk(id)
    if (!bodega) {
      return res.status(404).json({
        error: 'Bodega no encontrada en la base de datos'
      })
    }

    const { nombre, tipo, ubicacion } = req.body
    Object.assign(bodega, { nombre, tipo, ubicacion })
    await bodega.save()
    res.status(200).json(bodega)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al actualizar la bodega'
    })
  }
}

// Eliminar bodega
exports.deleteBodega = async (req, res) => {
  try {
    const id = req.params.id
    const bodega = await BodegaModel.findByPk(id)
    if (!bodega) {
      return res.status(404).json({
        error: 'Bodega no encontrada en la base de datos'
      })
    }

    await bodega.destroy()
    res.status(200).json({
      message: 'Bodega eliminada correctamente'
    })
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al eliminar la bodega'
    })
  }
}
