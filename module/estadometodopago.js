import { Schema,model  } from "mongoose";

const metodoSchema = new Schema({
    nombre_estado:{
        type:String,
        required:[true,'se requiere nombre de estado'],
        
    }
})

export default model('estado_metodo_pago',metodoSchema)