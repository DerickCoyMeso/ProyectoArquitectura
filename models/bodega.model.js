const { DataTypes } = require('sequelize')
const db = require('../db/db')

const Bodega = db.define('Bodega', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  tipo: {
    type: DataTypes.ENUM('fisica', 'virtual'),
    defaultValue: 'fisica'
  },
  ubicacion: {
    type: DataTypes.STRING(255)
  }
}, {
  tableName: 'bodegas',
  timestamps: false
})

module.exports = Bodega
