require('dotenv').config();
const Server = require('./models/server');
require('./constants/configs');

const server = new Server();

server.listen();