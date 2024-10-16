import mongoose from 'mongoose';
import DetalleVenta from '../module/detalleventa.js'

export async function obtenerDetallesVenta(req, res) {
    try {
        const detallesVenta = await DetalleVenta.find()
            .populate('id_venta')
            .populate('id_adicion')
            .populate('id_salsa');
        res.json(detallesVenta);
    } catch (error) {
        res.status(500).json({ error: 'Problemas al obtener los detalles de venta' });
    }
}

export async function crearDetalleVenta(req, res) {
    try {
        const { id_venta, producto, id_adicion, id_salsa, cantidad, precio } = req.body;

        const nuevoDetalleVenta = new DetalleVenta({
            id_venta: new mongoose.Types.ObjectId(id_venta),
            producto,
            id_adicion: id_adicion ? new mongoose.Types.ObjectId(id_adicion) : null,
            id_salsa: id_salsa ? new mongoose.Types.ObjectId(id_salsa) : null,
            cantidad,
            precio
        });

        await nuevoDetalleVenta.save();

        res.status(201).json({ message: 'Detalle de venta creado', detalleVenta: nuevoDetalleVenta });
    } catch (error) {
        res.status(500).json({ error: 'Problemas con la creación del detalle de venta' });
    }
}

export async function actualizarDetalleVenta(req, res) {
    try {
        const { id } = req.params;
        const { producto, id_adicion, id_salsa, cantidad, precio } = req.body;

        const detalleVentaActualizado = await DetalleVenta.findByIdAndUpdate(
            id,
            {
                producto,
                id_adicion: id_adicion ? new mongoose.Types.ObjectId(id_adicion) : null,
                id_salsa: id_salsa ? new mongoose.Types.ObjectId(id_salsa) : null,
                cantidad,
                precio
            },
            { new: true }
        );

        if (!detalleVentaActualizado) {
            return res.status(404).json({ error: 'Detalle de venta no encontrado' });
        }

        res.json({ message: 'Detalle de venta actualizado', detalleVenta: detalleVentaActualizado });
    } catch (error) {
        res.status(500).json({ error: 'Problemas con la actualización del detalle de venta' });
    }
}

export async function eliminarDetalleVenta(req, res) {
    try {
        const { id } = req.params;

        const detalleVentaEliminado = await DetalleVenta.findByIdAndDelete(id);

        if (!detalleVentaEliminado) {
            return res.status(404).json({ error: 'Detalle de venta no encontrado' });
        }

        res.json({ message: 'Detalle de venta eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Problemas al eliminar el detalle de venta' });
    }
}
