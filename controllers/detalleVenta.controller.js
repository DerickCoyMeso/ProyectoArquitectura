const DetalleVentaModel = require('../models/detalleVenta.model')

// Obtener todos los detalles de ventas
exports.getDetalleVentas = async (req, res) => {
  try {
    const detalles = await DetalleVentaModel.findAll()
    res.status(200).json(detalles)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al obtener los detalles de las ventas'
    })
  }
}

// Obtener detalle de venta por id
exports.getDetalleVentaById = async (req, res) => {
  try {
    const id = req.params.id
    const detalle = await DetalleVentaModel.findByPk(id)
    if (!detalle) {
      return res.status(404).json({
        error: 'Detalle de venta no encontrado en la base de datos'
      })
    }
    res.status(200).json(detalle)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al obtener el detalle de venta'
    })
  }
}

// Crear nuevo detalle de venta
exports.createDetalleVenta = async (req, res) => {
  try {
    const { venta_id, producto_id, cantidad, precio_unitario, subtotal } = req.body
    const detalle = await DetalleVentaModel.create({
      venta_id,
      producto_id,
      cantidad,
      precio_unitario,
      subtotal
    })
    res.status(201).json(detalle)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al crear el detalle de venta'
    })
  }
}

// Actualizar detalle de venta
exports.updateDetalleVenta = async (req, res) => {
  try {
    const id = req.params.id
    const detalle = await DetalleVentaModel.findByPk(id)
    if (!detalle) {
      return res.status(404).json({
        error: 'Detalle de venta no encontrado en la base de datos'
      })
    }

    const { venta_id, producto_id, cantidad, precio_unitario, subtotal } = req.body
    Object.assign(detalle, { venta_id, producto_id, cantidad, precio_unitario, subtotal })
    await detalle.save()
    res.status(200).json(detalle)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al actualizar el detalle de venta'
    })
  }
}

// Eliminar detalle de venta
exports.deleteDetalleVenta = async (req, res) => {
  try {
    const id = req.params.id
    const detalle = await DetalleVentaModel.findByPk(id)
    if (!detalle) {
      return res.status(404).json({
        error: 'Detalle de venta no encontrado en la base de datos'
      })
    }

    await detalle.destroy()
    res.status(200).json({
      message: 'Detalle de venta eliminado correctamente'
    })
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al eliminar el detalle de venta'
    })
  }
}
