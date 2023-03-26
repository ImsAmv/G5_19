'use strict'

var conn = require("../config/db-connection"),
    ClienteModel = () => {};

ClienteModel.getAll = (cb) => conn.query("SELECT * FROM CLIENTE", cb);

ClienteModel.getOne = (numero_cliente ,cb) => conn.query("Select * From CLIENTE where numero_cliente = $1", [numero_cliente], cb);

ClienteModel.post = (data, cb) => 
    conn.query("call public.P_INSERT_CLIENTE ($1,$2,$3,$4,$5,$6,$7)",
    [
        data. numero_cliente,
        data.nombres,
        data.apellidos,
        data.rtn,
        data.fecha_afiliacion,
        data.saldo_actual,
        data.numero_cuenta
    ],cb);

ClienteModel.put = (data, cb) => 
    conn.query("call public.P_UPDATE_CLIENTE ($1,$2,$3,$4,$5,$6,$7)",
    [
        data. numero_cliente,
        data.nombres,
        data.apellidos,
        data.rtn,
        data.fecha_afiliacion,
        data.saldo_actual,
        data.numero_cuenta
    ],cb);

ClienteModel.getOne = (numero_cliente ,cb) => conn.query("Select * From CLIENTE where numero_cliente = $1", [numero_cliente], cb);
ClienteModel.delete = (numero_cliente ,cb) => conn.query("call public.P_DELETE_CLIENTE ($1)", [numero_cliente], cb);

module.exports = ClienteModel;