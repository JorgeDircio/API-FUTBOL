const express = require('express');
const { check } = require('express-validator');
const LigaRoutes = express.Router();
const { validarCampos } = require('../middlewares');
const { LigaController } = require('../controllers');



LigaRoutes.post('/league', [check('name', 'El nombre es obligatorio').not().isEmpty(), validarCampos], LigaController.createLeague);

module.exports = {
  LigaRoutes
}