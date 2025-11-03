const ProveedorModel = require('../models/proveedor.model')

// Obtener todos los proveedores
exports.getProveedores = async (req, res) => {
	try {
		const proveedores = await ProveedorModel.findAll()
		res.status(200).json(proveedores)
	} catch (error) {
		res.status(500).json({
			error: error,
			message: 'Error al obtener los proveedores'
		})
	}
}

// Obtener proveedor por id
exports.getProveedorById = async (req, res) => {
	try {
		const id = req.params.id
		const proveedor = await ProveedorModel.findByPk(id)
		if (!proveedor) {
			return res.status(404).json({
				error: 'Proveedor no encontrado en la base de datos'
			})
		}
		res.status(200).json(proveedor)
	} catch (error) {
		res.status(500).json({
			error: error,
			message: 'Error al obtener el proveedor'
		})
	}
}

// Crear nuevo proveedor
exports.createProveedor = async (req, res) => {
	try {
		const { nombre, contacto, telefono, email, direccion, sitio_web } = req.body
		const proveedor = await ProveedorModel.create({
			nombre,
			contacto,
			telefono,
			email,
			direccion,
			sitio_web
		})
		res.status(201).json(proveedor)
	} catch (error) {
		res.status(500).json({
			error: error,
			message: 'Error al crear el proveedor'
		})
	}
}

// Actualizar proveedor
exports.updateProveedor = async (req, res) => {
	try {
		const id = req.params.id
		const proveedor = await ProveedorModel.findByPk(id)
		if (!proveedor) {
			return res.status(404).json({
				error: 'Proveedor no encontrado en la base de datos'
			})
		}

		const { nombre, contacto, telefono, email, direccion, sitio_web } = req.body
		Object.assign(proveedor, { nombre, contacto, telefono, email, direccion, sitio_web })
		await proveedor.save()
		res.status(200).json(proveedor)
	} catch (error) {
		res.status(500).json({
			error: error,
			message: 'Error al actualizar el proveedor'
		})
	}
}

// Eliminar proveedor
exports.deleteProveedor = async (req, res) => {
	try {
		const id = req.params.id
		const proveedor = await ProveedorModel.findByPk(id)
		if (!proveedor) {
			return res.status(404).json({
				error: 'Proveedor no encontrado en la base de datos'
			})
		}

		await proveedor.destroy()
		res.status(200).json({
			message: 'Proveedor eliminado correctamente'
		})
	} catch (error) {
		res.status(500).json({
			error: error,
			message: 'Error al eliminar el proveedor'
		})
	}
}

