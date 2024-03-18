const { Liga } = require('../models');

async function createLeague(req, res) {
  const { name } = req.body;

  if (!name) return res.status(400).send({ msg: 'El nombre de la liga es obligatorio' });

  const newLeague = new Liga({
    name
  });

  newLeague.save().then((savedLeague) => {
    return res.status(201).send(savedLeague);
  }).catch((err) => {
    return res.status(500).send({ msg: 'Ha ocurrido un error al crear la liga' });
  });

}


module.exports = {
  createLeague
}