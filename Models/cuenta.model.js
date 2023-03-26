'use strict'

var conn = require("../config/db-connection"),
    CuentaModel = () => {};

    CuentaModel.getAll = (cb) => conn.query("SELECT * FROM CUENTA", cb);

    CuentaModel.getOne = (numero_cuenta ,cb) => conn.query("Select * From CLIENTE where numero_cliente = $1", [numero_cuenta], cb);

    CuentaModel.post = (data, cb) => 
    conn.query("call public.P_INSERT_CLIENTE ($1,$2,$3,$4,$5,$6,$7)",
    [
        data.numero_cuenta,
        data.nombre_cuenta,
        data.numero_cliente,
        data.fecha_apertura,
        data.saldo_cuenta,
        data.saldo_retenido,
        data.tepo_moneda
    ],cb);

    CuentaModel.put = (data, cb) => 
    conn.query("call public.P_UPDATE_CLIENTE ($1,$2,$3,$4,$5,$6,$7)",
    [
        data.numero_cuenta,
        data.nombre_cuenta,
        data.numero_cliente,
        data.fecha_apertura,
        data.saldo_cuenta,
        data.saldo_retenido,
        data.tepo_moneda
    ],cb);

    CuentaModel.getOne = (numero_cuenta ,cb) => conn.query("Select * From CLIENTE where numero_cliente = $1", [numero_cuenta], cb);
    CuentaModel.delete = (numero_cuenta ,cb) => conn.query("call public.P_DELETE_CLIENTE ($1)", [numero_cuenta], cb);

module.exports = CuentaModel;