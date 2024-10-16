import { Schema, model } from "mongoose"; 

const adicionSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'Se requiere nombre de adición'],
        maxlength: 50
    },
    precio: {
        type: Number,
        required: [true, 'Se requiere precio de adición'],
        min: 0 
    },
    cantidad: {
        type: Number,
        required: [true, 'Se requiere cantidad de adición'],
        min: 0 
    }
}, { toJSON: { virtuals: true } });

adicionSchema.virtual('subtotal').get(function() {
    return this.precio * this.cantidad;
});

export default model('adicion', adicionSchema);
