import Router from 'express'
const routerventa = Router()

import {obtenerVenta,crearventa,actualizarventa,eliminarventa} from '../controller/ventacontroller.js'

routerventa.get('/',obtenerVenta)
routerventa.post('/',crearventa)
routerventa.put('/',actualizarventa)
routerventa.delete('/:id',eliminarventa)


export default routerventa