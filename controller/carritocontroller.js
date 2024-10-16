import carrito from '../module/carrito.js'

export async function obtenercarrito(req,res) {
    const carritos = await carrito.find();
    res.json(carritos)
}
export  async function crearcarrito(req,res) {
    try {
        const {id_cliente} = req.body
        const newcarrito = new carrito({
            id_cliente
        })
        await newcarrito.save();
        res.json('carrito creado')
    }catch(error){
        res.json('problemas con la creacion')
    }
}