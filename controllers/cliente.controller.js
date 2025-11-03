const ClienteModel = require('../models/cliente.model')

// Obtener todos los clientes
exports.getClientes = async (req, res) => {
  try {
    const clientes = await ClienteModel.findAll()
    res.status(200).json(clientes)
  } catch (error) {
    res.status(500).json({ 
      error: error, 
      message: 'Error al obtener los clientes' 
    })
  }
}

// Obtener cliente por Id
exports.getClienteById = async (req, res) => {
  try {
    const id = req.params.id
    const cliente = await ClienteModel.findByPk(id)
    if (!cliente) {
      return res.status(404).json({ 
        error: 'Cliente no encontrado' 
      })
    }
    res.status(200).json(cliente)
  } catch (error) {
    res.status(500).json({ 
      error: error,
      message: 'Error al obtener el cliente' 
    })
  }
}

// Crear nuevo cliente
exports.createCliente = async (req, res) => {
  try {
    const { nombre, apellido, telefono, email, direccion, nit, tipo } = req.body
    const cliente = await ClienteModel.create({ nombre, apellido, telefono, email, direccion, nit, tipo })
    res.status(201).json(cliente)
  } catch (error) {
    res.status(500).json({ 
      error: error, 
      message: 'Error al crear el cliente' })
  }
}

// Actualizar cliente
exports.updateCliente = async (req, res) => {
  try {
    const id = req.params.id
    const cliente = await ClienteModel.findByPk(id)
    if (!cliente) 
    {
      return res.status(404).json({
        error: 'Cliente no encontrado' 
      })
    }
    const { nombre, apellido, telefono, email, direccion, nit, tipo } = req.body
    Object.assign(cliente, { nombre, apellido, telefono, email, direccion, nit, tipo })
    await cliente.save()
    res.json(cliente)
  } catch (error) {
    res.status(500).json({ 
      error: error, 
      message: 'Error al actualizar el cliente' 
    })
  }
}

exports.deleteCliente = async (req, res) => {
  try {
    const id = req.params.id
    const cliente = await ClienteModel.findByPk(id)
    if (!cliente){
      return res.status(404).json({ 
        error: 'Cliente no encontrado' 
      })
    }
      
    await cliente.destroy()
    res.status(200).json({ 
      message: 'Cliente eliminado correctamente' 
    })
  } catch (error) {
    res.status(500).json({ 
      error: error, 
      message: 'Error al eliminar el cliente' 
    })
  }
}
