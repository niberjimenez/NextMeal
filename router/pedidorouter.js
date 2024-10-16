import Router from 'express'
const routerpedido = Router()

import {obtenerpedido,crearpedido,actualizarpedido,eliminarpedido } from '../controller/pedidocontroller.js'

routerpedido.get('/',obtenerpedido)
routerpedido.post('/',crearpedido)
routerpedido.put('/',actualizarpedido)
routerpedido.delete('/:id',eliminarpedido)


export default routerpedido