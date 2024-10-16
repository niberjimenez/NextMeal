import Router from 'express'
const routerestadopedido = Router()

import  {obtenerestado,crearestado} from '../controller/estadopedidocontroller.js'

routerestadopedido.get('/',obtenerestado)
routerestadopedido.post('/',crearestado)

export default routerestadopedido