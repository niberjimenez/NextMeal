import {Schema,model} from 'mongoose';

const clienteSchema = new Schema({
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        match: [/^\S+@\S+\.\S+$/, 'Por favor ingresa un email válido']

    },
    tipo_documento:{
        type:String,
        required:true,
        enum:['cc','tarjeta_identidad','pasaporte'],
        default: 'cc'
    },
    documento:{
        type:String,
        required:true,
        maxlength:[11,'maximo 11 numeros']
    },
    telefono:{
        type:String,
        required:true,
        maxlength:[10,'maximo 10 caracteres']
    },
    direccion:{
        type:String,
        required:true,

    },
    fecha_registro:{
        type:Date,
        default: Date.now
    },
    id_estado:{
        type:Schema.Types.ObjectId,
        ref:'estado_cliente',
        required:true
    },
    contraseña:{
        type:String,
        require:true
    },
    }, {
        timestamps: true 

    
})


export default  model('cliente',clienteSchema)
