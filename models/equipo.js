const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const equipoModel = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    unique: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

equipoModel.plugin(mongoosePaginate);
module.exports = mongoose.model('Equipo', equipoModel);