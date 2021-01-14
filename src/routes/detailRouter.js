const express = require('express');
const router = express.Router()

const detailController = require('../controllers/detailController')

router.get('/:id', detailController.detalle)

module.exports = router;