"use strict"
//ESTO ES UN EJEMPLO DE LAS RUTAS
var BancoController = require("../controllers/banco.controller",),
    express = require("express"),
    router = express.Router();

var ClienteController = require("../controllers/cliente.controller"),
    express = require("express"),
    router = express.Router();

var CuentaController = require("../controllers/cuenta.controller"),
    express = require("express"),
    router = express.Router();

router

    //***CLIENTE RUTA***//*
    .get("/cliente/getall", ClienteController.getAll)
    .post("/cliente/getone/:numero_cliente", ClienteController.getOne)
    .post("/cliente/insertar", ClienteController.post)
    .put("/cliente/actualizar/:numero_cliente", ClienteController.put)
    .delete("/cliente/eliminar/:numero_cliente", ClienteController.delete)
    

    //****BANCO RUTA****
    .get("/banco/getall", BancoController.getAll)
    .post("/banco/getone/:cod_banco", BancoController.getOne)
    .post("/banco/insertar", BancoController.post)
    .put("/banco/actualizar/:cod_banco", BancoController.put)
    .delete("/banco/eliminar/:cod_banco", BancoController.delete)
    

    //***CUENTA RUTA***//*
    .get("/cuenta/getall", CuentaController.getAll)
    .post("/cuenta/getone/:numero_cuenta", CuentaController.getOne)
    .post("/cuenta/insertar", CuentaController.post)
    .put("/cuenta/actualizar/:numero_cuenta", CuentaController.put)
    .delete("/cuenta/eliminar/:numero_cuenta", CuentaController.delete)

    
    .use(ClienteController.error404)
    .use(CuentaController.error404)
    .use(BancoController.error404)

module.exports = router;