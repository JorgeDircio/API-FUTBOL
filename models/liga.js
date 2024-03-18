const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const ligaModel = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
    unique: true,
  },
  teams: {
    type: [{
      team: { type: mongoose.Schema.Types.ObjectId, ref: 'Equipo' },
      wins: { type: Number, default: 0 },
      winsShootOut: { type: Number, default: 0 },
      draws: { type: Number, default: 0 },
      losses: { type: Number, default: 0 },
      lossesShootOut: { type: Number, default: 0 }
    }],
    default: [],
  },
  status: {
    type: Boolean,
    default: true,
    required: true,
  },
});

ligaModel.plugin(mongoosePaginate);
module.exports = mongoose.model('Liga', ligaModel);