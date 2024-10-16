import express,{json} from 'express'
import 'dotenv/config'
import dbconnection  from '../database/config.js'
import routerestado from '../router/estado_clienterouter.js'
import routercliente from '../router/clienterouter.js'
import routercarrito from '../router/carritorouter.js'
import routerpedido from '../router/pedidorouter.js'
import routermetodo from '../router/metodorouter.js'
import routerestadopedido from '../router/estadopedidorouter.js'
import routerdetallepedido from '../router/detallepedidorouter.js'
import routerventa from '../router/ventarouter.js'
import routerestadoventa from '../router/estadoventarouter.js'
import routeradicion from '../router/adiccionrouter.js'
import routersalsa from '../router/salsarouter.js'
import routerProductoCarrito from '../router/productocarritorouter.js'
import routerDetalleVenta from '../router/detalleventarouter.js'

class Server {
    constructor(){
        this.app = express()
        this.listen()
        this.dbconnection()
        this.router()
    }
    async dbconnection(){
        await dbconnection()
    }
    router(){
        this.app.use(json())
        this.app.use('/estadocliente',routerestado)
        this.app.use('/cliente',routercliente)
        this.app.use('/carrito',routercarrito)
        this.app.use('/pedido',routerpedido)
        this.app.use('/metodopago',routermetodo)
        this.app.use('/estadopedido',routerestadopedido)
        this.app.use('/detallepedido',routerdetallepedido)
        this.app.use('/venta',routerventa)
        this.app.use('/estadoventa',routerestadoventa)
        this.app.use('/adicion',routeradicion)
        this.app.use('/salsa',routersalsa)
        this.app.use('/productocarrito',routerProductoCarrito)
        this.app.use('/detalleventa',routerDetalleVenta)
    }
    listen(){
        this.app.listen(process.env.PORT, () =>{
            console.log(`running :${process.env.PORT}`)
        })
    }
}

export default Server
