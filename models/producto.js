const mongoose = require('mongoose');
const ProductoSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  categoria: String,
  url_archivo: String
});
module.exports = mongoose.model('Producto', ProductoSchema);