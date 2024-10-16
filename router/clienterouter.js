import Router from 'express'
const routercliente = Router()

import {obtenercliente,crearcliente,actualizarcliente,eliminarcliente,asignarestado } from '../controller/clientecontroller.js'

routercliente.get('/',obtenercliente)
routercliente.post('/',crearcliente)
routercliente.post('/asignar',asignarestado)
routercliente.put('/',actualizarcliente)
routercliente.delete('/',eliminarcliente)


export default routercliente