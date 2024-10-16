import { Schema, model } from 'mongoose';

const estadoVentaSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        unique: true,
        maxlength: 50
    }
});

export default model('estado_venta', estadoVentaSchema);