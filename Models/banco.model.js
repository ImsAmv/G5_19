'use strict'

var conn = require("../config/db-connection"),
    BancoModel = () => {};

BancoModel.getAll = (cb) => conn.query("SELECT * FROM Banco", cb);

BancoModel.getOne = (cod_banco ,cb) => conn.query("Select * From Banco where Cod_Banco = $1", [cod_banco], cb);

BancoModel.post = (data, cb) => 
    conn.query("call public.P_INSERT_BANCO ($1,$2,$3,$4,$5,$6,$7)",
    [
        data.Cod_Banco,
        data.Nombre,
        data.OF_Principal,
        data.Cant_Sucursales,
        data.Fch_Fundacion,
        data.Pais,
        data.RTN
    ],cb);

BancoModel.put = (data, cb) => 
    conn.query("call public.P_UPDATE_BANCO ($1,$2,$3,$4,$5,$6,$7)",
    [
        data.Cod_Banco,
        data.Nombre,
        data.OF_Principal,
        data.Cant_Sucursales,
        data.Fch_Fundacion,
        data.Pais,
        data.RTN
    ],cb);

BancoModel.delete = (cod_banco ,cb) => conn.query("Select * From Banco where Cod_Banco = $1", [cod_banco], cb);
BancoModel.delete = (cod_banco ,cb) => conn.query("call public.P_DELETE_BANCO ($1)", [cod_banco], cb);

module.exports = BancoModel;