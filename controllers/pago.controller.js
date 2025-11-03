const PagoModel = require('../models/pago.model')

// Obtener todos los pagos
exports.getPagos = async (req, res) => {
  try {
    const pagos = await PagoModel.findAll()
    res.status(200).json(pagos)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al obtener los pagos'
    })
  }
}

// Obtener pago por id
exports.getPagoById = async (req, res) => {
  try {
    const id = req.params.id
    const pago = await PagoModel.findByPk(id)
    if (!pago) {
      return res.status(404).json({
        error: 'Pago no encontrado en la base de datos'
      })
    }
    res.status(200).json(pago)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al obtener el pago'
    })
  }
}

// Crear nuevo pago
exports.createPago = async (req, res) => {
  try {
    const { venta_id, metodo_pago_id, monto, fecha, referencia } = req.body
    const pago = await PagoModel.create({
      venta_id,
      metodo_pago_id,
      monto,
      fecha,
      referencia
    })
    res.status(201).json(pago)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al crear el pago'
    })
  }
}

// Actualizar pago
exports.updatePago = async (req, res) => {
  try {
    const id = req.params.id
    const pago = await PagoModel.findByPk(id)
    if (!pago) {
      return res.status(404).json({
        error: 'Pago no encontrado en la base de datos'
      })
    }

    const { venta_id, metodo_pago_id, monto, fecha, referencia } = req.body
    Object.assign(pago, { venta_id, metodo_pago_id, monto, fecha, referencia })
    await pago.save()
    res.status(200).json(pago)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al actualizar el pago'
    })
  }
}

// Eliminar pago
exports.deletePago = async (req, res) => {
  try {
    const id = req.params.id
    const pago = await PagoModel.findByPk(id)
    if (!pago) {
      return res.status(404).json({
        error: 'Pago no encontrado en la base de datos'
      })
    }

    await pago.destroy()
    res.status(200).json({
      message: 'Pago eliminado correctamente'
    })
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al eliminar el pago'
    })
  }
}
