import Router from 'express';
const routerDetalleVenta = Router();

import { obtenerDetallesVenta, crearDetalleVenta, actualizarDetalleVenta, eliminarDetalleVenta } from '../controller/detalleventacontroller.js'

routerDetalleVenta.get('/', obtenerDetallesVenta);
routerDetalleVenta.post('/', crearDetalleVenta);
routerDetalleVenta.put('/:id', actualizarDetalleVenta);
routerDetalleVenta.delete('/:id', eliminarDetalleVenta);

export default routerDetalleVenta;
