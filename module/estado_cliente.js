import { Schema,model  } from "mongoose";

const estadoSchema = new Schema({
    nombre_estado:{
        type:String,
        required:[true,'se requiere nombre de estado'],
        enum:['activo','inactivo'],
        default:'activo'
    }
})

export default model('estado_cliente',estadoSchema)