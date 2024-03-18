const express = require('express');
const { check } = require('express-validator');
const EquiposRoutes = express.Router();
const { validarCampos } = require('../middlewares');
const { EquipoController } = require('../controllers');



EquiposRoutes.post('/team', [check('name', 'El nombre es obligatorio').not().isEmpty(), validarCampos], EquipoController.createEquipo);
EquiposRoutes.patch('/team/:id', EquipoController.updateTeam);
EquiposRoutes.delete('/team/:id', EquipoController.deleteTeam);
EquiposRoutes.get('/teams/', EquipoController.getAllTeam);

module.exports = {
  EquiposRoutes
}