import Router from 'express'
const routeradicion = Router()

import  {obteneradicion,crearadicion} from '../controller/adicioncontroller.js'

routeradicion.get('/',obteneradicion)
routeradicion.post('/',crearadicion)

export default routeradicion