const VentaModel = require('../models/venta.model')

// Obtener todas las ventas
exports.getVentas = async (req, res) => {
  try {
    const ventas = await VentaModel.findAll()
    res.status(200).json(ventas)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al obtener las ventas'
    })
  }
}

// Obtener venta por id
exports.getVentaById = async (req, res) => {
  try {
    const id = req.params.id
    const venta = await VentaModel.findByPk(id)
    if (!venta) {
      return res.status(404).json({
        error: 'Venta no encontrada en la base de datos'
      })
    }
    res.status(200).json(venta)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al obtener la venta'
    })
  }
}

// Crear nueva venta
exports.createVenta = async (req, res) => {
  try {
    const { cliente_id, usuario_id, tipo_venta, total } = req.body
    const venta = await VentaModel.create({
      cliente_id,
      usuario_id,
      tipo_venta,
      total
    })
    res.status(201).json(venta)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al crear la venta'
    })
  }
}

// Actualizar venta
exports.updateVenta = async (req, res) => {
  try {
    const id = req.params.id
    const venta = await VentaModel.findByPk(id)
    if (!venta) {
      return res.status(404).json({
        error: 'Venta no encontrada en la base de datos'
      })
    }

    const { cliente_id, usuario_id, tipo_venta, total } = req.body
    Object.assign(venta, { cliente_id, usuario_id, tipo_venta, total })
    await venta.save()
    res.status(200).json(venta)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al actualizar la venta'
    })
  }
}

// Eliminar venta
exports.deleteVenta = async (req, res) => {
  try {
    const id = req.params.id
    const venta = await VentaModel.findByPk(id)
    if (!venta) {
      return res.status(404).json({
        error: 'Venta no encontrada en la base de datos'
      })
    }

    await venta.destroy()
    res.status(200).json({
      message: 'Venta eliminada correctamente'
    })
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al eliminar la venta'
    })
  }
}
