const DetalleCompraModel = require('../models/detalleCompra.model')

// Obtener todos los detalles de compras
exports.getDetalleCompras = async (req, res) => {
  try {
    const detalles = await DetalleCompraModel.findAll()
    res.status(200).json(detalles)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al obtener los detalles de las compras'
    })
  }
}

// Obtener detalle de compra por id
exports.getDetalleCompraById = async (req, res) => {
  try {
    const id = req.params.id
    const detalle = await DetalleCompraModel.findByPk(id)
    if (!detalle) {
      return res.status(404).json({
        error: 'Detalle de compra no encontrado en la base de datos'
      })
    }
    res.status(200).json(detalle)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al obtener el detalle de compra'
    })
  }
}

// Crear nuevo detalle de compra
exports.createDetalleCompra = async (req, res) => {
  try {
    const { compra_id, producto_id, cantidad, precio_unitario, subtotal } = req.body
    const detalle = await DetalleCompraModel.create({
      compra_id,
      producto_id,
      cantidad,
      precio_unitario,
      subtotal
    })
    res.status(201).json(detalle)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al crear el detalle de compra'
    })
  }
}

// Actualizar detalle de compra
exports.updateDetalleCompra = async (req, res) => {
  try {
    const id = req.params.id
    const detalle = await DetalleCompraModel.findByPk(id)
    if (!detalle) {
      return res.status(404).json({
        error: 'Detalle de compra no encontrado en la base de datos'
      })
    }

    const { compra_id, producto_id, cantidad, precio_unitario, subtotal } = req.body
    Object.assign(detalle, { compra_id, producto_id, cantidad, precio_unitario, subtotal })
    await detalle.save()
    res.status(200).json(detalle)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al actualizar el detalle de compra'
    })
  }
}

// Eliminar detalle de compra
exports.deleteDetalleCompra = async (req, res) => {
  try {
    const id = req.params.id
    const detalle = await DetalleCompraModel.findByPk(id)
    if (!detalle) {
      return res.status(404).json({
        error: 'Detalle de compra no encontrado en la base de datos'
      })
    }

    await detalle.destroy()
    res.status(200).json({
      message: 'Detalle de compra eliminado correctamente'
    })
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al eliminar el detalle de compra'
    })
  }
}
