import { Schema, model } from 'mongoose';

const salsaSchema = new Schema({
    nombre: {
        type: String,
        required: true,
        maxlength: 50 
    }
}, {
    timestamps: true 
});

export default model('salsa', salsaSchema);