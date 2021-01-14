const express = require('express');
const app = express();
// Acá nos falta nuestra fuente de datos
const platos = require('../database/platos')
// Acá nos falta un objeto literal con las acciones para cada ruta
module.exports = {
    detalle: (req, res) => {
        let id = platos.find(function (elemento) {
            return elemento.id == req.params.id;
        });
        res.render('detalle', { id })
        //console.log(id.descripcion); 
    },
}