const express = require('express');
const clienteController = require('./controllers/cliente.controller');
const servicioControl = require('./controllers/servicio.controller');


const app = express();
const enrutamiento = require('./routes/enrutamiento.router');
app.use('/api/v1', enrutamiento);


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs');

app.get('/', clienteController.inicio);

app.get('/servicios', servicioControl.listar);
app.get('/servicios/:nombre', servicioControl.buscar);       
app.post('/servicios', servicioControl.insertar);
app.put('/servicios/:nombre', servicioControl.update);
app.delete('/servicios/:nombre', servicioControl.eliminar);



app.listen(process.env.PORT || 9300, ()=> {
    console.log("Aplicación en línea, ingresa a 5555");
});