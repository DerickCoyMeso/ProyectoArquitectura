const { DataTypes } = require('sequelize')
const db = require('../db/db')

const MetodoPago = db.define('MetodoPago', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  descripcion: {
    type: DataTypes.STRING(255)
  }
}, {
  tableName: 'metodos_pago',
  timestamps: false
})

module.exports = MetodoPago
