const express = require('express');
require('dotenv').config();
const conectarDB = require('./config/db');
const productosRoutes = require('./routes/productos');
const app = express();
app.use(express.json());
conectarDB();
app.use('/productos', productosRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});