// Módulos
const express = require('express');
const app = express();

// Acá falta uno... 😇
const path = require('path')

// Configuración
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));

// Acá falta el template engine
app.set('view engine', 'ejs')

// Acá falta el archivo de rutas y después las vistas de EJS
const mainRouter = require('./routes/mainRouter');
const detailRouter = require('./routes/detailRouter');

// Rutas
app.use('/', mainRouter)
app.use('/detalle', detailRouter)

app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})