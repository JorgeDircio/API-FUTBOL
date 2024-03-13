const mongoose = require('mongoose');
const { HOST_DB, BD_NAME, USER_NAME_BD, PASSWORD_USER_BD } = require('../constants/configs');
const uri = `${HOST_DB}${BD_NAME}`;

const dbConnection = async () => {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            user: USER_NAME_BD,
            pass: PASSWORD_USER_BD,
        });
        console.log('DATABASE connection established');
    } catch (error) {
        console.error(error);
        throw new Error('Error in the connection');
    }
};

module.exports = {
    dbConnection
}