import { Schema, model } from 'mongoose';

const ventaSchema = new Schema({
  id_cliente: {
    type: Schema.Types.ObjectId,
    ref: 'cliente',
    required: true
  },
  fecha_venta: {
    type: Date,
    default: Date.now
  },
  precio: {
    type: Number,
    required: true
  },
  id_estado_venta: {
    type: Schema.Types.ObjectId,
    ref: 'estado_venta',
    required: true
  },  
  
  id_metodo_pago: {
    type: Schema.Types.ObjectId,
    ref: 'estado_Metodo_Pago', 
    required: true
  },
  

}, {
  timestamps: true
});

export default model('venta', ventaSchema);