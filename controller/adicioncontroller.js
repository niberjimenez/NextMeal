import Adicion from '../module/adicion.js';

export async function obteneradicion(req, res) {
    try {
        const adiciones = await Adicion.find();
        res.json(adiciones);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Problemas al obtener las adiciones' });
    }
}

export async function crearadicion(req, res) {
    try {
        const { nombre, precio, cantidad } = req.body;

        if (!nombre || precio == null || cantidad == null) {
            return res.status(400).json({ error: 'Se requieren nombre, precio y cantidad para la adición' });
        }

        const nuevaAdicion = new Adicion({
            nombre,
            precio,
            cantidad
        });

        await nuevaAdicion.save();
        res.status(201).json({ message: 'Adición creada', adicion: nuevaAdicion });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Problemas con la creación de la adición' });
    }
}
