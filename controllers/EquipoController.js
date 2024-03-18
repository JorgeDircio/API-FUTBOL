const { Equipo } = require('../models');

async function createEquipo(req, res) {
  const { name } = req.body;
  if (!name) {
    res.status(400).send({ msg: 'El nombre es obligatorio' });
    return;
  }
  const team = new Equipo({
    name,
  });
  
  team.save().then((teamStorage) => {
    return res.status(201).send(teamStorage);
  }).catch(() => {
    return res.status(500).send({ msg: 'Ha ocurrido un error al crear el equipo' });
  });
}

async function updateTeam(req, res) {
  const { id } = req.params;
  const teamData = req.body;

  Equipo.findByIdAndUpdate({ _id: id }, teamData).then(() => {
    return res.status(200).send({ msg: 'Actualizacion de usuario exitosa' });
  }).catch(() => {
    return res.status(500).send({ msg: 'Hubo un error al actualizar el usuario' });
  });
}

async function deleteTeam(req, res) {
  const { id } = req.params;
  Equipo.findByIdAndUpdate(id, { status: false }).then((team) => {
    if (!team) {
      return res.status(403).send({ msg: 'El Equipo no ha sido encontrado' });
    }
    return res.status(200).send({ msg: 'Equipo eliminado correctamente' });
  }).catch(() => {
    return res.status(500).send({ msg: 'Hubo un error al eliminar el equipo' });
  });
}

async function deleteTeam(req, res) {
  const { id } = req.params;
  Equipo.findByIdAndUpdate(id, { status: false }).then((team) => {
    if (!team) {
      return res.status(403).send({ msg: 'El Equipo no ha sido encontrado' });
    }
    return res.status(200).send({ msg: 'Equipo eliminado correctamente' });
  }).catch(() => {
    return res.status(500).send({ msg: 'Hubo un error al eliminar el equipo' });
  });
}

async function getAllTeam(req, res) {
  const { active } = req.query;
  console.log(active);
  let response = [];
  if (active === undefined) {
    response = await Equipo.find({ status: true });
  } else {
    response = await Equipo.find({ status: active });
  }
  return res.status(200).send(response);
}


module.exports = {
  createEquipo,
  updateTeam,
  deleteTeam,
  getAllTeam
}