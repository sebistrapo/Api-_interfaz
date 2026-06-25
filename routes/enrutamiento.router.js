const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/cliente.controller');

router.get('/cliente-form', clienteController.clienteForm);

router.get('/clientes', clienteController.listar);
router.get('/cliente/:telefono', clienteController.buscar);
router.post('/clientes', clienteController.insertar);
router.put('/clientes/:telefono', clienteController.update);
router.delete('/clientes/:telefono', clienteController.eliminar);

module.exports = router;