import Router from 'express';
const routerestadoventa = Router();

import { obtenerEstadoVentas, crearEstadoVenta } from '../controller/estadoventacontroller.js'

routerestadoventa.get('/', obtenerEstadoVentas);
routerestadoventa.post('/', crearEstadoVenta);

export default routerestadoventa;