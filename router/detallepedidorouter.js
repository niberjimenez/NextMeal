import Router from 'express'
const routerdetallepedido = Router()

import  {obtenerDetallesPedido,crearDetallePedido,actualizarDetallePedido,eliminarDetallePedido} from '../controller/detallepedidocontroller.js'

routerdetallepedido.get('/',obtenerDetallesPedido)
routerdetallepedido.post('/',crearDetallePedido)
routerdetallepedido.put('/',actualizarDetallePedido)
routerdetallepedido.delete('/:id',eliminarDetallePedido)


export default routerdetallepedido