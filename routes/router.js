"use strict";
//ESTO ES UN EJEMPLO DE LAS RUTAS
var BancoController = require("../controllers/banco.controller"),
    express = require("express"),
    router = express.Router();

router
  //****BANCO EJEMPLO****
  .get("/banco/getall", BancoController.getAll)
  .post("/banco/getone/:cod_banco", BancoController.getOne)
  .post("/banco/insertar", BancoController.post)
  .put("/banco/actualizar/:cod_banco", BancoController.put)
  .delete("/banco/eliminar/:cod_banco", BancoController.delete)
  .use(BancoController.error404);
  
  
  "use strict";
 
  //***CLIENTE RUTA***//
  var ClienteController = require("../controllers/cliente.controller"),
      express = require("express"),
      router = express.Router();
  
  router
    //****CLIENTE EJEMPLO****
    .get("/cliente/getall", Clienteontroller.getAll)
    .post("/cliente/getone/:numero_cuenta", ClienteController.getOne)
    .post("/cliente/insertar", ClienteController.post)
    .put("/cliente/actualizar/:numero_cuenta", ClienteController.put)
    .delete("/cliente/eliminar/:numero_cuenta", ClienteController.delete)
    .use(ClienteController.error404);
  
  module.exports = router;
module.exports = router;