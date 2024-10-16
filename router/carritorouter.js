import Router from 'express'
const routercarrito = Router()

import  {obtenercarrito,crearcarrito} from '../controller/carritocontroller.js'

routercarrito.get('/',obtenercarrito)
routercarrito.post('/',crearcarrito)

export default routercarrito