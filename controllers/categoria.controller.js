const CategoriaModel = require('../models/categoria.model')

// Obtener todas las categorías
exports.getCategorias = async (req, res) => {
  try {
    const categorias = await CategoriaModel.findAll()
    res.status(200).json(categorias)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al obtener las categorías'
    })
  }
}

// Obtener categoría por id
exports.getCategoriaById = async (req, res) => {
  try {
    const id = req.params.id
    const categoria = await CategoriaModel.findByPk(id)
    if (!categoria) {
      return res.status(404).json({
        error: 'Categoría no encontrada en la base de datos'
      })
    }
    res.status(200).json(categoria)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al obtener la categoría'
    })
  }
}

// Crear nueva categoría
exports.createCategoria = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body
    const categoria = await CategoriaModel.create({ nombre, descripcion })
    res.status(201).json(categoria)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al crear la categoría'
    })
  }
}

// Actualizar categoría
exports.updateCategoria = async (req, res) => {
  try {
    const id = req.params.id
    const categoria = await CategoriaModel.findByPk(id)
    if (!categoria) {
      return res.status(404).json({
        error: 'Categoría no encontrada en la base de datos'
      })
    }

    const { nombre, descripcion } = req.body
    Object.assign(categoria, { nombre, descripcion })
    await categoria.save()
    res.status(200).json(categoria)
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al actualizar la categoría'
    })
  }
}

// Eliminar categoría
exports.deleteCategoria = async (req, res) => {
  try {
    const id = req.params.id
    const categoria = await CategoriaModel.findByPk(id)
    if (!categoria) {
      return res.status(404).json({
        error: 'Categoría no encontrada en la base de datos'
      })
    }

    await categoria.destroy()
    res.status(200).json({
      message: 'Categoría eliminada correctamente'
    })
  } catch (error) {
    res.status(500).json({
      error: error,
      message: 'Error al eliminar la categoría'
    })
  }
}
