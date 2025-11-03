const { DataTypes } = require('sequelize')
const db = require('../db/db')

const Pago = db.define('Pago', {
  id: {
    type: DataTypes.CHAR(36),
    primaryKey: true
  },
  venta_id: {
    type: DataTypes.CHAR(36),
    allowNull: false
  },
  metodo_pago_id: {
    type: DataTypes.CHAR(36)
  },
  monto: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE
  },
  referencia: {
    type: DataTypes.STRING(100)
  }
}, {
  tableName: 'pagos',
  timestamps: false
})

module.exports = Pago
