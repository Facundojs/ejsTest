const express = require('express');
const app = express();
// Acá nos falta nuestra fuente de datos
const platos = require('../database/platos')
// Acá nos falta un objeto literal con las acciones para cada ruta
module.exports  = {
    index: (req, res) => {
        res.render('index', {platos})
    },
    menu: (req, res) => {
        res.render('cartaMenu', {platos})
    },
    about: (req, res) => {
        res.render('about')
    }, 
}

