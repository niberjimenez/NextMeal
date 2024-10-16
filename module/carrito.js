import { Schema,model  } from "mongoose";

const carritoSchema = new Schema({
    id_cliente:{
        type:Schema.Types.ObjectId,
        ref: 'cliente',
        required:[true,'se requiere id de cliente'],
        
    },
    fecha_creacion:{
        type:Date,
        required:true,
        default: Date.now
    }

})

export default model('carrito',carritoSchema)