import Router from 'express'
const routermetodo = Router()

import  {obtenermetodo,crearmetodo} from '../controller/estadometodocontroller.js'

routermetodo.get('/',obtenermetodo)
routermetodo.post('/',crearmetodo)

export default routermetodo