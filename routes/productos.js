const express = require('express');
const router = express.Router();
const Producto = require('../models/Producto');

router.get('/', async (req, res) => {
  const productos = await Producto.find();
  res.json(productos);
});

router.post('/', async (req, res) => {
  const nuevo = new Producto(req.body);
  await nuevo.save();
  res.json(nuevo);
});

router.put('/:id', async (req, res) => {
  const actualizado = await Producto.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.json(actualizado);
});

router.delete('/:id', async (req, res) => {
  await Producto.findByIdAndDelete(req.params.id);
  res.json({mensaje: 'Eliminado'});
});

module.exports = router;