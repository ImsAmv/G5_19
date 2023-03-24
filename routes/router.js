"use strict";

var  ClienteController = require("../controllers/cliente_controller"),
  express = require("express"),
  router = express.Router();

router

  .get("/alumno/getall", ClienteController.getAll)
  .get("/alumno/getone/:no_cuenta", ClienteController.getOne)
  .post("/alumno/insertar/:no_cuenta", ClienteController.post)
  .put("/alumno/actualizar/:no_cuenta", ClienteController.put)
  .delete("/alumno/eliminar/:no_cuenta", ClienteController.delete)
  .use(ClienteController.error404);

module.exports = router;
