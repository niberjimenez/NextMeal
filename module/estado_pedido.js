import { Schema,model  } from "mongoose";

const estadoSchema = new Schema({
    nombre_estado:{
        type:String,
        required:[true,'se requiere nombre de estado'],
        
    }
})

export default model('estado_pedido',estadoSchema)