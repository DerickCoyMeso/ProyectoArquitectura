const { DataTypes } = require('sequelize')
const db = require('../db/db')

const MovimientoInventario = db.define('MovimientoInventario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  producto_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  tipo: {
    type: DataTypes.ENUM('entrada', 'salida', 'ajuste'),
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  motivo: {
    type: DataTypes.STRING(255)
  },
  fecha: {
    type: DataTypes.DATE
  },
  usuario_id: {
    type: DataTypes.INTEGER
  }
}, {
  tableName: 'movimientos_inventario',
  timestamps: false
})

module.exports = MovimientoInventario
