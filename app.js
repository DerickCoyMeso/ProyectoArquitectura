const express = require('express')
require('dotenv').config()
const sequelize = require('./db/db')

const rolRoutes = require('./routes/rol.routes')
const usuarioRoutes = require('./routes/usuario.routes')
const sesionRoutes = require('./routes/sesion.routes')
const clienteRoutes = require('./routes/cliente.routes')
const proveedorRoutes = require('./routes/proveedor.routes')
const categoriaRoutes = require('./routes/categoria.routes')
const bodegaRoutes = require('./routes/bodega.routes')
const productoRoutes = require('./routes/producto.routes')
const movimientoInventarioRoutes = require('./routes/movimientoInventario.routes')
const compraRoutes = require('./routes/compra.routes')
const detalleCompraRoutes = require('./routes/detalleCompra.routes')
const ventaRoutes = require('./routes/venta.routes')
const detalleVentaRoutes = require('./routes/detalleVenta.routes')
const metodoPagoRoutes = require('./routes/metodoPago.routes')
const pagoRoutes = require('./routes/pago.routes')

const app = express()
app.use(express.json())

app.use('/api', rolRoutes)
app.use('/api', usuarioRoutes)
app.use('/api', sesionRoutes)
app.use('/api', clienteRoutes)
app.use('/api', proveedorRoutes)
app.use('/api', categoriaRoutes)
app.use('/api', bodegaRoutes)
app.use('/api', productoRoutes)
app.use('/api', movimientoInventarioRoutes)
app.use('/api', compraRoutes)
app.use('/api', detalleCompraRoutes)
app.use('/api', ventaRoutes)
app.use('/api', detalleVentaRoutes)
app.use('/api', metodoPagoRoutes)
app.use('/api', pagoRoutes)


const PORT = process.env.PORT || 3000

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Base de datos conectada`)
    console.log(`Servidor ejecutándose en el puerto ${PORT}`)
  })
}).catch(err => {
  console.error('Error al conectar la base de datos:', err)
})