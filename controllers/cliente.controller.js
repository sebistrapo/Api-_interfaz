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

        res.render('pages/lista', {clientes:clientes});

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
    console.log("Entra");
    try {
        let clienteNuevo = {
           nombre: req.body.nombre,
           email: req.body.email,
           telefono: req.body.telefono
       };

       console.log(clienteNuevo);
       
        const clientes = await modeloCliente.insertOne(clienteNuevo);

        res.json(clientes);
        res.render('pages/lista');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.update = async (req, res) => {
    try {
        let servicioActualizado = {
           nombre: req.body.nombre,
           email: req.body.email,
           telefono: req.body.telefono
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
        const cliente = await modeloCliente.findOneAndDelete({ telefono: req.params.telefono});

        res.json(cliente);
        res.render('pages/lista');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}