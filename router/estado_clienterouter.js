import Router from 'express'
const routerestado = Router()

import  {obtenerestado,crearestado} from '../controller/estadoclientecontroller.js'

routerestado.get('/',obtenerestado)
routerestado.post('/',crearestado)

export default routerestado