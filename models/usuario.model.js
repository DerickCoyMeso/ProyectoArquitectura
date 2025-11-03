const { DataTypes } = require('sequelize')
const db = require('../db/db')

const Usuario = db.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING(100)
  },
  email: {
    type: DataTypes.STRING(120),
    allowNull: false,
    unique: true
  },
  password_hash: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  rol_id: {
    type: DataTypes.INTEGER
  },
  creado_en: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'usuarios',
  timestamps: false
})

module.exports = Usuario
