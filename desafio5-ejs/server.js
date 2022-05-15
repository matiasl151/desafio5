const express = require('express');
const routerApiProductos = require('./src/routers/routerApiProductos.js');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

//==============================
app.use(routerApiProductos);

const PORT = 8080;
const server = app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${server.address().port}`);
});
server.on('error', error => console.log(`Error en el servidor ${error}`));