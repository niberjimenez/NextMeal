import ProductoCarrito from '../module/producto_carrito.js'

export async function obtenerProductosCarrito(req, res) {
    try {
        const productosCarrito = await ProductoCarrito.find().populate('id_carrito');
        res.json(productosCarrito);
    } catch (error) {
        res.status(500).json({ error: 'Problemas al obtener los productos del carrito' });
    }
}

export async function crearProductoCarrito(req, res) {
    try {
        const { id_carrito, producto, cantidad, precio } = req.body;

        const nuevoProductoCarrito = new ProductoCarrito({
            id_carrito,
            producto,
            cantidad,
            precio
        });

        await nuevoProductoCarrito.save();

        res.status(201).json({ message: 'Producto añadido al carrito', producto: nuevoProductoCarrito });
    } catch (error) {
        res.status(500).json({ error: 'Problemas con la creación del producto en el carrito' });
    }
}

export async function actualizarProductoCarrito(req, res) {
    try {
        const { id } = req.params;
        const { cantidad, precio } = req.body;

        const productoActualizado = await ProductoCarrito.findByIdAndUpdate(
            id,
            { cantidad, precio },
            { new: true }
        );

        if (!productoActualizado) {
            return res.status(404).json({ error: 'Producto en el carrito no encontrado' });
        }

        res.json({ message: 'Producto del carrito actualizado', producto: productoActualizado });
    } catch (error) {
        res.status(500).json({ error: 'Problemas con la actualización del producto en el carrito' });
    }
}

export async function eliminarProductoCarrito(req, res) {
    try {
        const { id } = req.params;

        const productoEliminado = await ProductoCarrito.findByIdAndDelete(id);

        if (!productoEliminado) {
            return res.status(404).json({ error: 'Producto en el carrito no encontrado' });
        }

        res.json({ message: 'Producto del carrito eliminado' });
    } catch (error) {
        res.status(500).json({ error: 'Problemas al eliminar el producto del carrito' });
    }
}
