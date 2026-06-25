const modeloCliente = require('../models/cliente.model');

exports.inicio = async (req, res) => {
    try {
        res.render('pages/inicio');
    } catch {
        console.log("Error");
    }
}

exports.clienteForm = async (req, res) => {
    try {
    res.render('pages/cliente-form');
    } catch {
        console.log("Error");
    }
}

exports.listar = async (req, res) => {
    try {
        const clientes = await modeloCliente.find();

        res.render('pages/index3', {clientes:clientes});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.buscar = async (req, res) => {
    try {

        const clientes = await modeloCliente.findOne(
            { "telefono": req.params.telefono }
        );
        if (!clientes) {
            return res.status(404).json({ error: 'Cliente no encontrado' });
        }

        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.insertar = async (req, res) => {
    console.log('entra')
    try {
        let servicioNuevo = {
           nombre: req.body.nombre,
           descripcion: req.body.descripcion,
           duracionMinutos: req.body.duracionMinutos,
           precio: req.body.precio,
           categoria: req.body.categoria,
           activo: req.body.activo,
           imagen: req.body.imagen
       };
       console.log(clienteNuevo);
        const clientes = await modeloCliente.insertOne(servicioNuevo);

        res.json(clientes);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.update = async (req, res) => {
    try {
        let servicioActualizado = {
           nombre: req.body.nombre,
           descripcion: req.body.descripcion,
           duracionMinutos: req.body.duracionMinutos,
           precio: req.body.precio,
           categoria: req.body.categoria,
           activo: req.body.activo,
           imagen: req.body.imagen
       };


        const servicio = await modeloCliente.updateOne(
            { "nombre": req.params.nombre },
            { $set:servicioActualizado }
        );

        res.json(servicio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.eliminar = async (req, res) => {
    try {
        const servicio = await modeloCliente.findOneAndDelete({ nombre: req.params.nombre});

        res.json(servicio);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}