const express = require('express');
require('dotenv').config(); // Cargamos variables antes que nada
const conectarDB = require('./config/db');

const app = express();

// Conectar a la base de datos
conectarDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});