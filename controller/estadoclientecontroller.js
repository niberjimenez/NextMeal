import estado from '../module/estado_cliente.js'

export async function obtenerestado(req,res) {
    const estados = await estado.find();
    res.json(estados)
}
export  async function crearestado(req,res) {
    try {
        const {nombre_estado} = req.body
        const newestado = new estado({
            nombre_estado
        })
        await newestado.save();
        res.json('estado creado')
    }catch(error){
        res.json('problemas con la creacion')
    }
}
