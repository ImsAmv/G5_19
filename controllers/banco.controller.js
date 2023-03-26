'use strict'

var BancoModel = require('../models/banco.model'),
BancoController = () => {}

BancoController.getAll = (req, res, next) => {
    BancoModel.getAll((err, rows) => { 
        if (err)
        {
            let locals = {
                title : 'Error al consultar la base de datos',
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.render('error', locals)
        }
        else
        {
            let locals = {
                title : 'Lista de los Bancos',
                data : rows
            }
            res.status(200).send(rows.rows)
        }
    })
    BancoModel.use = req
}

BancoController.getOne = (req, res, next) => {
    let cod_banco = req.body.cod_banco
    console.log(cod_banco)

    BancoModel.getOne(cod_banco, (err, rows) => {
        console.log(err, '---', rows)
        if (err)
        {
            let locals = {
                title :  `Error al buscar el registro con el id: ${cod_banco}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.render('error', locals)
        }else{
            let locals = {
                title : 'Lista de Bancos',
                data : rows
            }
            res.status(200).send(rows.rows)
        }
    })
}

BancoController.post = (req, res, next) => {
    let banco = {
        Cod_Banco : req.body.Cod_Banco,
        Nombre : req.body.Nombre,
        OF_Principal : req.body.OF_Principal,
        Cant_Sucursales : req.body.Cant_Sucursales,
        Fch_Fundacion : req.body.Fch_Fundacion,
        Pais : req.body.Pais,
        RTN : req.body.RTN
    }
    console.log(banco)

    BancoModel.post(banco, (err) => {
        if (err)
        {
            let locals = {
                title :  `Error al guardar el registro con el id: ${banco.Cod_Banco}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.status(520).send(err)
        }else{
            res.send('Banco ingresado de forma correcta')
        }
    })
}

BancoController.put = (req, res, next) => {
    let banco = {
        Cod_Banco : req.body.Cod_Banco,
        Nombre : req.body.Nombre,
        OF_Principal : req.body.OF_Principal,
        Cant_Sucursales : req.body.Cant_Sucursales,
        Fch_Fundacion : req.body.Fch_Fundacion,
        Pais : req.body.Pais,
        RTN : req.body.RTN
    }
    console.log(banco)

    BancoModel.put(banco, (err) => {
        if (err)
        {
            let locals = {
                title :  `Error al actualizar el registro con el id: ${banco.Cod_Banco}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.status(520).send(err)
        }else{
            res.send('Banco actualizado de forma correcta')
        }
    })
}

BancoController.delete = (req, res, next) => {
    let cod_banco = req.body.Cod_banco;
    console.log(cod_banco)

    BancoModel.delete(cod_banco, (err) => {
        if (err)
        {
            let locals = {
                title :  `Error al eliminar el registro con el id: ${Cod_Banco}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.status(520).send(err)
        }else{
            res.send('Banco eliminado de forma correcta')
        }
    })
}


BancoController.addForm = (req, res, next) => res.render('add-banco', { title: 'Agregar Banco' })

BancoController.error404 = (req, res, next) => {
    let error = new Error(),
    locals = {
        title : 'Error 404',
        description : 'Recurso no encontrado',
        error  : error
    }
    error.status = 404
    res.render('error', locals)
    next()
}

module.exports = BancoController;