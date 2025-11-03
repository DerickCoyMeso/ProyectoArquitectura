const CompraModel = require('../models/compra.model')

// Obtener todas las compras
exports.getCompras = async (req, res) => {
  try {
    const compras = await CompraModel.findAll()
    res.status(200).json(compras)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al obtener las compras'
    })
  }
}

// Obtener compra por id
exports.getCompraById = async (req, res) => {
  try {
    const id = req.params.id
    const compra = await CompraModel.findByPk(id)
    if (!compra) {
      return res.status(404).json({
        error: 'Compra no encontrada en la base de datos'
      })
    }
    res.status(200).json(compra)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al obtener la compra'
    })
  }
}

// Crear nueva compra
exports.createCompra = async (req, res) => {
  try {
    const { proveedor_id, usuario_id, numero_factura, total } = req.body
    const compra = await CompraModel.create({
      proveedor_id,
      usuario_id,
      numero_factura,
      total
    })
    res.status(201).json(compra)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al crear la compra'
    })
  }
}

// Actualizar compra
exports.updateCompra = async (req, res) => {
  try {
    const id = req.params.id
    const compra = await CompraModel.findByPk(id)
    if (!compra) {
      return res.status(404).json({
        error: 'Compra no encontrada en la base de datos'
      })
    }

    const { proveedor_id, usuario_id, numero_factura, total } = req.body
    Object.assign(compra, { proveedor_id, usuario_id, numero_factura, total })
    await compra.save()
    res.status(200).json(compra)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al actualizar la compra'
    })
  }
}

// Eliminar compra
exports.deleteCompra = async (req, res) => {
  try {
    const id = req.params.id
    const compra = await CompraModel.findByPk(id)
    if (!compra) {
      return res.status(404).json({
        error: 'Compra no encontrada en la base de datos'
      })
    }

    await compra.destroy()
    res.status(200).json({
      message: 'Compra eliminada correctamente'
    })
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al eliminar la compra'
    })
  }
}
