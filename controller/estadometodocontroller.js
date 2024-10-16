import metodo from '../module/estadometodopago.js'

export async function obtenermetodo(req,res) {
    const estados = await metodo.find();
    res.json(estados)
}
export  async function crearmetodo(req,res) {
    try {
        const {nombre_estado} = req.body
        const newmetodo = new metodo({
            nombre_estado
        })
        await newmetodo.save();
        res.json('estado creado')
    }catch(error){
        res.json('problemas con la creacion')
    }
}
