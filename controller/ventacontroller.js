import mongoose from 'mongoose';
import venta from '../module/venta.js';

export async function obtenerVenta(req, res) {
    try {
        const ventas = await venta.find()
            .populate('id_cliente')
            .populate('id_estado_venta')
            .populate('id_metodo_pago')
            .populate('adiciones');
        res.json(ventas);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las ventas' });
    }
}

export async function crearventa(req, res) {
    try {
        const { id_cliente, precio, id_estado_venta, id_metodo_pago, adiciones } = req.body;

        const nuevaVenta = new venta({
            id_cliente: new mongoose.Types.ObjectId(id_cliente),
            precio,
            id_estado_venta: new mongoose.Types.ObjectId(id_estado_venta),
            id_metodo_pago: new mongoose.Types.ObjectId(id_metodo_pago),
        });

        await nuevaVenta.save();
        res.status(201).json({ message: 'Venta creada con éxito', venta: nuevaVenta });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la venta' });
    }
}

export async function actualizarventa(req, res) {
    try {
        const { id } = req.params;
        const { id_cliente, precio, id_estado_venta, id_metodo_pago, adiciones } = req.body;

        const ventaActualizada = await venta.findByIdAndUpdate(
            id,
            {
                id_cliente: new mongoose.Types.ObjectId(id_cliente),
                precio,
                id_estado_venta: new mongoose.Types.ObjectId(id_estado_venta),
                id_metodo_pago: new mongoose.Types.ObjectId(id_metodo_pago),
            },
            { new: true }
        );

        if (!ventaActualizada) {
            return res.status(404).json({ error: 'Venta no encontrada' });
        }

        res.json({ message: 'Venta actualizada con éxito', venta: ventaActualizada });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la venta' });
    }
}

export async function eliminarventa(req, res) {
    try {
        const { id } = req.params;
        const ventaEliminada = await venta.findByIdAndDelete(id);

        if (!ventaEliminada) {
            return res.status(404).json({ error: 'Venta no encontrada' });
        }

        res.json({ message: 'Venta eliminada con éxito' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar la venta' });
    }
}
