import { Schema, model } from 'mongoose';

const productoCarritoSchema = new Schema({
    id_carrito: {
        type: Schema.Types.ObjectId,
        ref: 'carrito',
        required: true
    },
    producto: {
        type: String,
        required: true
    },
    cantidad: {
        type: Number,
        required: true,
        min: 1
    },
    precio: {
        type: Number,  
        required: true,
        min: 0.01
    }
}, {
    timestamps: true
});

productoCarritoSchema.virtual('subtotal').get(function () {
    return this.cantidad * this.precio;
});

export default model('producto_carrito', productoCarritoSchema);
