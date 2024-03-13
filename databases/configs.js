const mongoose = require('mongoose');
const { HOST_DB, BD_NAME } = require('../constants/configs');
const uri = `${HOST_DB}${BD_NAME}`;

const dbConnection = async () => {
    try {
      mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log('DATABASE connection established');
    } catch (error) {
      console.log(error);
      throw new Error('Error in the connection');
    }
  };

module.exports = {
    dbConnection
}