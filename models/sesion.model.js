const { DataTypes } = require('sequelize')
const db = require('../db/db')

const Sesion = db.define('Sesion', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  token: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  fecha_inicio: {
    type: DataTypes.DATE
  },
  fecha_expiracion: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'sesiones',
  timestamps: false
})

module.exports = Sesion
