import Router from 'express'
const routersalsa = Router()

import  {obtenersalsa,crearsalsa} from '../controller/salsacontroller.js'

routersalsa.get('/',obtenersalsa)
routersalsa.post('/',crearsalsa)

export default routersalsa