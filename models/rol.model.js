const { DataTypes } = require('sequelize')
const db = require('../db/db')

const Rol = db.define('Rol', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true
  },
  descripcion: {
    type: DataTypes.STRING(150)
  }
}, {
  tableName: 'roles',
  timestamps: false
})

module.exports = Rol
