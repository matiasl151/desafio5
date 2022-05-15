const express = require('express');
const routerApiProductos = require('./routers/routerApiProductos.js');
const { engine } = require('express-handlebars');
const app = express();
const PORT = 8080;

app.use(express.static('public'));

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

//==============================
app.use(routerApiProductos);

const server = app.listen(PORT, () => {
    console.log(`Escuchando en el puerto ${PORT}`);
})
server.on('error', error => {console.log(error.message)})

//TODO: 
// -arreglar form para que redireccione correctamente
// -mostrar icon en tabla