import Router from 'express';
const routerProductoCarrito = Router();

import { 
    obtenerProductosCarrito, 
    crearProductoCarrito, 
    actualizarProductoCarrito, 
    eliminarProductoCarrito 
} from '../controller/productocarritocontroller.js';

routerProductoCarrito.get('/', obtenerProductosCarrito);
routerProductoCarrito.post('/', crearProductoCarrito);
routerProductoCarrito.put('/:id', actualizarProductoCarrito);
routerProductoCarrito.delete('/:id', eliminarProductoCarrito);

export default routerProductoCarrito;