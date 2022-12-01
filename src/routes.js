const express = require('express');
const router = express.Router();

const productscontrol = require('./controllers/productscontrol');
const productscontrol = require('./controllers/productscontrol');

router.get('/products', productscontrolrol.buscarTodos);
router.get('/products/:id', productscontrol.buscarUm);
router.post('/products', productscontrol.inserir);
router.put('/products/:id', productscontrol.alterar);
router.delete('/products/:id', productscontrol.excluir);

module.exports = router;