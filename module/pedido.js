import {Schema,model} from 'mongoose';

const pedidoSchema = new Schema({
    id_cliente:{
        type:Schema.Types.ObjectId,
        ref:'cliente',
        required:true
    },
    fecha_pedido:{
        type:Date,
        default: Date.now,
        required:true
    },
    id_metodo_pago:{
        type:Schema.Types.ObjectId,
        ref:'estado_metodo_pago',
        required:true

    },
    total:{
        type:Number,
        required:true 
        
    },
    id_estado_pedido:{
        type:Schema.Types.ObjectId,
        ref:'estado_pedido',
        required:true
    },
    
    direccion_envio:{
        type:String,
        required:true,
        
    },
    }, {
    timestamps: true 
})


export default  model('pedido',pedidoSchema)
