const { DataTypes } = require('sequelize')
const db = require('../db/db')

const DetalleCompra = db.define('DetalleCompra', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  compra_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  producto_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  precio_unitario: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  },
  subtotal: {
    type: DataTypes.DECIMAL(10,2),
    allowNull: false
  }
}, {
  tableName: 'detalle_compras',
  timestamps: false
})

module.exports = DetalleCompra
