const ProductoModel = require('../models/producto.model')

// Obtener todos los productos
exports.getProductos = async (req, res) => {
	try {
		const productos = await ProductoModel.findAll()
		res.status(200).json(productos)
	} catch (error) {
		res.status(500).json({
			error: error,
			message: 'Error al obtener los productos'
		})
	}
}

// Obtener producto por id
exports.getProductoById = async (req, res) => {
	try {
		const id = req.params.id
		const producto = await ProductoModel.findByPk(id)
		if (!producto) {
			return res.status(404).json({
				error: 'Producto no encontrado en la base de datos'
			})
		}
		res.status(200).json(producto)
	} catch (error) {
		res.status(500).json({
			error: error,
			message: 'Error al obtener el producto'
		})
	}
}

// Crear nuevo producto
exports.createProducto = async (req, res) => {
	try {
		const {
			codigo,
			nombre,
			descripcion,
			marca,
			modelo,
			precio_compra,
			precio_venta,
			garantia_meses,
			stock,
			categoria_id,
			proveedor_id,
			bodega_id
		} = req.body

		const producto = await ProductoModel.create({
			codigo,
			nombre,
			descripcion,
			marca,
			modelo,
			precio_compra,
			precio_venta,
			garantia_meses,
			stock,
			categoria_id,
			proveedor_id,
			bodega_id
		})

		res.status(201).json(producto)
	} catch (error) {
		res.status(500).json({
			error: error,
			message: 'Error al crear el producto'
		})
	}
}

// Actualizar producto
exports.updateProducto = async (req, res) => {
	try {
		const id = req.params.id
		const producto = await ProductoModel.findByPk(id)
		if (!producto) {
			return res.status(404).json({
				error: 'Producto no encontrado en la base de datos'
			})
		}

		const {
			codigo,
			nombre,
			descripcion,
			marca,
			modelo,
			precio_compra,
			precio_venta,
			garantia_meses,
			stock,
			categoria_id,
			proveedor_id,
			bodega_id
		} = req.body

		Object.assign(producto, {
			codigo,
			nombre,
			descripcion,
			marca,
			modelo,
			precio_compra,
			precio_venta,
			garantia_meses,
			stock,
			categoria_id,
			proveedor_id,
			bodega_id
		})

		await producto.save()
		res.status(200).json(producto)
	} catch (error) {
		res.status(500).json({
			error: error,
			message: 'Error al actualizar el producto'
		})
	}
}

// Eliminar producto
exports.deleteProducto = async (req, res) => {
	try {
		const id = req.params.id
		const producto = await ProductoModel.findByPk(id)
		if (!producto) {
			return res.status(404).json({
				error: 'Producto no encontrado en la base de datos'
			})
		}

		await producto.destroy()
		res.status(200).json({
			message: 'Producto eliminado correctamente'
		})
	} catch (error) {
		res.status(500).json({
			error: error,
			message: 'Error al eliminar el producto'
		})
	}
}
