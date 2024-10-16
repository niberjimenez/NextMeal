import { Schema, model } from 'mongoose';

const detallePedidoSchema = new Schema({
    id_pedido: {
        type: Schema.Types.ObjectId,
        ref: 'pedido',
        required: true
    },
    producto: {
        type:String,
    },
    id_adicion:{
        type:Schema.Types.ObjectId,
        ref:'adicion'
    },
    id_salsa:{
        type:Schema.Types.ObjectId,
        ref:'salsa'
    
    },
    cantidad: {
        type: Number,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    subtotal: {
        type: Number,
        required: true,
    
    }
    }, {
    timestamps: true 
});


export default model('detalle_pedido', detallePedidoSchema);