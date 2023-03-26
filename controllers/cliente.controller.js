'use strict'

var ClienteModel = require('../models/cliente.model'),
ClienteController = () => {}

ClienteController.getAll = (req, res, next) => {
    ClienteModel.getAll((err, rows) => { 
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
                title : 'Lista de los Clientes',
                data : rows
            }
            res.status(200).send(rows.rows)
        }
    })
    ClienteModel.use = req
}

ClienteController.getOne = (req, res, next) => {
    let numero_cliente = req.body.numero_cliente
    console.log(numero_cliente)

    ClienteModel.getOne(numero_cliente, (err, rows) => {
        console.log(err, '---', rows)
        if (err)
        {
            let locals = {
                title :  `Error al buscar el registro con el id: ${numero_cliente}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.render('error', locals)
        }else{
            let locals = {
                title : 'Lista de Clientes',
                data : rows
            }
            res.status(200).send(rows.rows)
        }
    })
}

ClienteController.post = (req, res, next) => {
    let cliente = {
        numero_cliente : req.body.numero_cliente,
        nombres : req.body.nombres,
        apellidos : req.body.apellidos,
        rtn : req.body.rtn,
        fecha_afiliacion : req.body.fecha_afiliacion,
        saldo_actual : req.body.saldo_actual,
        numero_cuenta : req.body.numero_cuenta
    }
    console.log(cliente)

    ClienteModel.post(cliente, (err) => {
        if (err)
        {
            let locals = {
                title :  `Error al guardar el registro con el id: ${cliente.numero_cliente}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.status(520).send(err)
        }else{
            res.send('Cliente ingresado de forma correcta')
        }
    })
}

ClienteController.put = (req, res, next) => {
    let cliente = {
        numero_cliente : req.body.numero_cliente,
        nombres : req.body.nombres,
        apellidos : req.body.apellidos,
        rtn : req.body.rtn,
        fecha_afiliacion : req.body.fecha_afiliacion,
        saldo_actual : req.body.saldo_actual,
        numero_cuenta : req.body.numero_cuenta
    }
    console.log(cliente)

    ClienteModel.put(cliente, (err) => {
        if (err)
        {
            let locals = {
                title :  `Error al actualizar el registro con el id: ${cliente.numero_cliente}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.status(520).send(err)
        }else{
            res.send('Cliente actualizado de forma correcta')
        }
    })
}

ClienteController.delete = (req, res, next) => {
    let numero_cliente = req.body.numero_cliente;
    console.log(numero_cliente)

    ClienteModel.delete(numero_cliente, (err) => {
        if (err)
        {
            let locals = {
                title :  `Error al eliminar el registro con el id: ${numero_cliente}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.status(520).send(err)
        }else{
            res.send('Cliente eliminado de forma correcta')
        }
    })
}


ClienteController.addForm = (req, res, next) => res.render('add-cliente', { title: 'Agregar Cliente' })

ClienteController.error404 = (req, res, next) => {
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

module.exports = ClienteController;