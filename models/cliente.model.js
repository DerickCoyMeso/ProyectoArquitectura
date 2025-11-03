const { DataTypes } = require('sequelize')
const db = require('../db/db')

const Cliente = db.define('Cliente', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(120),
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING(120)
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
  nit: {
    type: DataTypes.STRING(30)
  },
  tipo: {
    type: DataTypes.ENUM('individual', 'empresa'),
    defaultValue: 'individual'
  },
  creado_en: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'clientes',
  timestamps: false
})

module.exports = Cliente
