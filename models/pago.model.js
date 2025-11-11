const { DataTypes } = require('sequelize')
const db = require('../db/db')

const Pago = db.define('Pago', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  venta_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  metodo_pago_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  monto: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  referencia: {
    type: DataTypes.STRING(100)
  }
}, {
  tableName: 'pagos',
  timestamps: false
})

module.exports = Pago