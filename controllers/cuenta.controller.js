'use strict'

var CuentaModel = require('../models/cuenta.model'),
CuentaController = () => {}

CuentaController.getAll = (req, res, next) => {
    CuentaModel.getAll((err, rows) => { 
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
    CuentaModel.use = req
}

CuentaController.getOne = (req, res, next) => {
    let numero_cuenta = req.body.numero_cuenta
    console.log(numero_cuenta)

    CuentaModel.getOne(numero_cuenta, (err, rows) => {
        console.log(err, '---', rows)
        if (err)
        {
            let locals = {
                title :  `Error al buscar el registro con el id: ${numero_cuenta}`,
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

CuentaController.post = (req, res, next) => {
    let cuenta = {
        numero_cuenta : req.body.numero_cuenta,
        nombre_cuenta : req.body.nombre_cuenta,
        numero_cliente : req.body.numero_cliente,
        fecha_apertura : req.body.fecha_apertura,
        saldo_cuenta : req.body.saldo_cuenta,
        saldo_retenido : req.body.saldo_retenido,
        tepo_moneda : req.body.tepo_moneda
    }
    console.log(cuenta)

    CuentaModel.post(cuenta, (err) => {
        if (err)
        {
            let locals = {
                title :  `Error al guardar el registro con el id: ${cuenta.numero_cuenta}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.status(520).send(err)
        }else{
            res.send('Cliente ingresado de forma correcta')
        }
    })
}

CuentaController.put = (req, res, next) => {
    let cuenta = {
        numero_cuenta : req.body.numero_cuenta,
        nombre_cuenta : req.body.nombre_cuenta,
        numero_cliente : req.body.numero_cliente,
        fecha_apertura : req.body.fecha_apertura,
        saldo_cuenta : req.body.saldo_cuenta,
        saldo_retenido : req.body.saldo_retenido,
        tepo_moneda : req.body.tepo_moneda
    }
    console.log(cuenta)

    CuentaModel.put(cuenta, (err) => {
        if (err)
        {
            let locals = {
                title :  `Error al actualizar el registro con el id: ${cuenta.numero_cuenta}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.status(520).send(err)
        }else{
            res.send('Cliente actualizado de forma correcta')
        }
    })
}

CuentaController.delete = (req, res, next) => {
    let numero_cuenta = req.body.numero_cuenta;
    console.log(numero_cuenta)

    CuentaModel.delete(numero_cuenta, (err) => {
        if (err)
        {
            let locals = {
                title :  `Error al eliminar el registro con el id: ${numero_cuenta}`,
                description : 'Error de Sintaxis SQL',
                error : err
            }
            res.status(520).send(err)
        }else{
            res.send('Cliente eliminado de forma correcta')
        }
    })
}


CuentaController.addForm = (req, res, next) => res.render('add-cliente', { title: 'Agregar Cliente' })

CuentaController.error404 = (req, res, next) => {
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

module.exports = CuentaController;