import { Schema, model } from 'mongoose';

const detalleVentaSchema = new Schema({
    id_venta: {
        type: Schema.Types.ObjectId,
        ref: 'venta',
        required: true
    },
    producto: {
        type: String,
        required: true
    },
    id_adicion: {
        type: Schema.Types.ObjectId,
        ref: 'adicion'
    },
    id_salsa: {
        type: Schema.Types.ObjectId,
        ref: 'salsa'
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


detalleVentaSchema.virtual('subtotal').get(function () {
    return this.cantidad * this.precio;
});

export default model('detalle_venta', detalleVentaSchema);
