const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { dbConnection } = require('../databases/configs');
const { EquiposRoutes, LigaRoutes } = require('../routes');
const { PORT, API_VERSION, IP_SERVER } = require('../constants/configs');

class Server {

  constructor() {
    this.app = express();
    this.API_VERSION = API_VERSION;
    this.PORT = PORT|| 3000;
    this.IP_SERVER = IP_SERVER;

    //Conexion a la BD
    this.connectDB();

    this.middlewares();

    this.routes();
  }


  async connectDB() {
    await dbConnection();
  }

  middlewares() {

    //Configuracion del body parser
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());

    //Configurar carpeta estatica
    this.app.use(express.static("uploads"));

    //configuracion de cors
    this.app.use(cors());

  }

  routes() {
    //configuracion routing
    // this.app.use(`/api/${this.API_VERSION}`, UsuariosRoutes);
    this.app.use(`/api/${this.API_VERSION}`, EquiposRoutes);
    this.app.use(`/api/${this.API_VERSION}`, LigaRoutes);
  }

  listen() {
    this.app.listen(this.PORT, () => {
      console.log('################################');
      console.log('########### API REST ###########');
      console.log('################################');
      console.log('################################');
      console.log(`http://${this.IP_SERVER}:${this.PORT}/api/${this.API_VERSION}`);
    });
  }

}

module.exports = Server;