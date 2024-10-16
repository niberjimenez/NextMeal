import estadoVenta from '../module/estado_venta.js';

export async function obtenerEstadoVentas(req, res) {
    try {
        const estadosVentas = await estadoVenta.find();
        res.json(estadosVentas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los estados de venta' });
    }
}

export async function crearEstadoVenta(req, res) {
    try {
        const { nombre } = req.body;

        const nuevoEstadoVenta = new estadoVenta({
            nombre
        });

        await nuevoEstadoVenta.save();
        res.status(201).json({ message: 'Estado de venta creado con éxito', estado: nuevoEstadoVenta });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el estado de venta' });
    }
}