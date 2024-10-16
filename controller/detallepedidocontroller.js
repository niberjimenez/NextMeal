import detallePedido from '../module/detallepedido.js';
import mongoose from 'mongoose';

export async function obtenerDetallesPedido(req, res) {
    try {
        const detalles = await detallePedido.find().populate('id_pedido').populate('id_adicion').populate('id_salsa');
        res.json(detalles);
    } catch (error) {
        res.status(500).json({ error: 'Problemas al obtener los detalles del pedido' });
    }
}

export async function crearDetallePedido(req, res) {
    try {
        const { id_pedido, producto, cantidad, precio, id_adicion, id_salsa } = req.body;

        const subtotal = cantidad * precio;

        const nuevoDetalle = new detallePedido({
            id_pedido: new mongoose.Types.ObjectId(id_pedido),
            producto,
            id_adicion,
            id_salsa,
            cantidad,
            precio,
            subtotal
        });

        await nuevoDetalle.save();
        res.status(201).json({ message: 'Detalle de pedido creado', detalle: nuevoDetalle });
    } catch (error) {
        res.status(500).json({ error: 'Problemas con la creación del detalle de pedido' });
    }
}

export async function actualizarDetallePedido(req, res) {
    try {
        const { _id, cantidad, precio } = req.body;

        const subtotal = cantidad * precio;

        const detalleActualizado = await detallePedido.findOneAndUpdate(
            { _id },
            { cantidad, precio, subtotal },
            { new: true } // Para devolver el documento actualizado
        );

        if (!detalleActualizado) {
            return res.status(404).json({ error: 'Detalle de pedido no encontrado' });
        }

        res.json({ message: 'Detalle de pedido actualizado', detalle: detalleActualizado });
    } catch (error) {
        res.status(500).json({ error: 'Problemas con la actualización del detalle de pedido' });
    }
}

export async function eliminarDetallePedido(req, res) {
    try {
        const { id } = req.params;
        const detalleEliminado = await detallePedido.findByIdAndDelete(id);

        if (!detalleEliminado) {
            return res.status(404).json({ error: 'Detalle de pedido no encontrado' });
        }

        res.json({ message: 'Detalle de pedido eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Problemas al eliminar el detalle de pedido' });
    }
}