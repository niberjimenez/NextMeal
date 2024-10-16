import mongoose from 'mongoose';
import pedido from '../module/pedido.js';

export async function obtenerpedido(req,res) {
    const pedidos = await pedido.find().populate('id_cliente').populate('id_metodo_pago').populate('id_estado_pedido');
    res.json(pedidos)
}
export async function crearpedido(req, res) {
    try {

        const { id_cliente, id_metodo_pago, total, id_estado_pedido, direccion_envio } = req.body;

        
        if (!mongoose.Types.ObjectId.isValid(id_cliente) || 
            !mongoose.Types.ObjectId.isValid(id_metodo_pago) || 
            !mongoose.Types.ObjectId.isValid(id_estado_pedido)) {
            return res.status(400).json({ error: 'IDs inválidos' });
        }

    
        const newpedido = new pedido({
            id_cliente: new mongoose.Types.ObjectId(id_cliente),
            id_metodo_pago: new mongoose.Types.ObjectId(id_metodo_pago),
            total,
            id_estado_pedido: new mongoose.Types.ObjectId(id_estado_pedido),
            direccion_envio
        });

        
        await newpedido.save();

        
        res.json('pedido creado');
    } catch (error) {

        res.status(500).json({ error: 'problemas con la creacion de pedido' });
    }
}
export async function actualizarpedido(req,res) {
    try{
        const {id_cliente,
            direccion_envio} = req.body
        await pedido.findOneAndUpdate({id_cliente:id_cliente},{direccion_envio:direccion_envio})
        res.json('actualizacion exictosa')
    }catch(error){
        res.json('problemas con la actualizacion')
    }
}


export async function eliminarpedido(req,res) {
    try{
        const _id = req.params.id
        await pedido.findByIdAndDelete(_id)
        res.json('pedido eliminado ')
    }catch(error){
        res.json('problemas al eliminar ')
    }
}