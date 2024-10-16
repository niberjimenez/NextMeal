import Salsa from '../module/salsa.js';

export async function obtenersalsa(req, res) {
    try {
        const salsas = await Salsa.find();
        res.json(salsas);
    } catch (error) {
        res.status(500).json({ error: 'Problemas al obtener las salsas' });
    }
}

export async function crearsalsa(req, res) {
    try {
        const { nombre } = req.body;
        const nuevaSalsa = new Salsa({ nombre });
        await nuevaSalsa.save();
        res.status(201).json({ message: 'Salsa creada', salsa: nuevaSalsa });
    } catch (error) {
        res.status(500).json({ error: 'Problemas con la creación de la salsa' });
    }
}
