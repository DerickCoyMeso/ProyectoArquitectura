const { DataTypes } = require('sequelize')
const db = require('../db/db')

const Categoria = db.define('Categoria', {
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
  tableName: 'categorias',
  timestamps: false
})

module.exports = Categoria
