const { DataTypes } = require('sequelize')
const db = require('../db/db')

const Venta = db.define('Venta', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  cliente_id: {
    type: DataTypes.INTEGER
  },
  usuario_id: {
    type: DataTypes.INTEGER
  },
  tipo_venta: {
    type: DataTypes.ENUM('mostrador', 'en_linea'),
    defaultValue: 'mostrador'
  },
  total: {
    type: DataTypes.DECIMAL(10,2),
    defaultValue: 0
  },
  fecha: {
    type: DataTypes.DATE
  }
}, {
  tableName: 'ventas',
  timestamps: false
})

module.exports = Venta
