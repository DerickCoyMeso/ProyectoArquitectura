const { DataTypes } = require('sequelize')
const db = require('../db/db')

const Producto = db.define('Producto', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  codigo: {
    type: DataTypes.STRING(60),
    allowNull: false,
    unique: true
  },
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT
  },
  marca: {
    type: DataTypes.STRING(100)
  },
  modelo: {
    type: DataTypes.STRING(100)
  },
  precio_compra: {
    type: DataTypes.DECIMAL(10,2)
  },
  precio_venta: {
    type: DataTypes.DECIMAL(10,2)
  },
  garantia_meses: {
    type: DataTypes.INTEGER,
    defaultValue: 12
  },
  stock: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  },
  categoria_id: {
    type: DataTypes.INTEGER
  },
  proveedor_id: {
    type: DataTypes.INTEGER
  },
  bodega_id: {
    type: DataTypes.INTEGER
  },
  creado_en: {
    type: DataTypes.DATE
  },
  actualizado_en: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'productos',
  timestamps: false
})

module.exports = Producto
