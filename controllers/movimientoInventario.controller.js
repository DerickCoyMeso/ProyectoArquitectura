const MovimientoInventarioModel = require('../models/movimientoInventario.model')

// Obtener todos los movimientos de inventario
exports.getMovimientosInventario = async (req, res) => {
  try {
    const movimientos = await MovimientoInventarioModel.findAll()
    res.status(200).json(movimientos)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al obtener los movimientos de inventario'
    })
  }
}

// Obtener movimiento de inventario por id
exports.getMovimientoInventarioById = async (req, res) => {
  try {
    const id = req.params.id
    const movimiento = await MovimientoInventarioModel.findByPk(id)
    if (!movimiento) {
      return res.status(404).json({
        error: 'Movimiento de inventario no encontrado en la base de datos'
      })
    }
    res.status(200).json(movimiento)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al obtener el movimiento de inventario'
    })
  }
}

// Crear nuevo movimiento de inventario
exports.createMovimientoInventario = async (req, res) => {
  try {
    const { producto_id, tipo, cantidad, motivo, usuario_id } = req.body
    const movimiento = await MovimientoInventarioModel.create({
      producto_id,
      tipo,
      cantidad,
      motivo,
      usuario_id
    })
    res.status(201).json(movimiento)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al crear el movimiento de inventario'
    })
  }
}

// Actualizar movimiento de inventario
exports.updateMovimientoInventario = async (req, res) => {
  try {
    const id = req.params.id
    const movimiento = await MovimientoInventarioModel.findByPk(id)
    if (!movimiento) {
      return res.status(404).json({
        error: 'Movimiento de inventario no encontrado en la base de datos'
      })
    }

    const { producto_id, tipo, cantidad, motivo, usuario_id } = req.body
    Object.assign(movimiento, { producto_id, tipo, cantidad, motivo, usuario_id })
    await movimiento.save()
    res.status(200).json(movimiento)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al actualizar el movimiento de inventario'
    })
  }
}

// Eliminar movimiento de inventario
exports.deleteMovimientoInventario = async (req, res) => {
  try {
    const id = req.params.id
    const movimiento = await MovimientoInventarioModel.findByPk(id)
    if (!movimiento) {
      return res.status(404).json({
        error: 'Movimiento de inventario no encontrado en la base de datos'
      })
    }

    await movimiento.destroy()
    res.status(200).json({
      message: 'Movimiento de inventario eliminado correctamente'
    })
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al eliminar el movimiento de inventario'
    })
  }
}
