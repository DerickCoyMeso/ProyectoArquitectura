const { DataTypes } = require('sequelize')
const db = require('../db/db')

const Proveedor = db.define('Proveedor', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(120),
    allowNull: false
  },
  contacto: {
    type: DataTypes.STRING(100)
  },
  telefono: {
    type: DataTypes.STRING(20)
  },
  email: {
    type: DataTypes.STRING(100)
  },
  direccion: {
    type: DataTypes.STRING(255)
  },
  sitio_web: {
    type: DataTypes.STRING(120)
  },
  creado_en: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'proveedores',
  timestamps: false
})

module.exports = Proveedor
