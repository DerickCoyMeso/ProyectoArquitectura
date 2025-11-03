const { DataTypes } = require('sequelize')
const db = require('../db/db')

const Compra = db.define('Compra', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  proveedor_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  usuario_id: {
    type: DataTypes.INTEGER
  },
  numero_factura: {
    type: DataTypes.STRING(60)
  },
  total: {
    type: DataTypes.DECIMAL(10,2),
    defaultValue: 0
  },
  fecha: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'compras',
  timestamps: false
})

module.exports = Compra
