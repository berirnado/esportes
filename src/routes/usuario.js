const express = require('express')

const router = express.Router()

const usuarioController = require('../controller/usuario')

router.get('/', usuarioController.list)

router.post('/', usuarioController.filtro)

router.get('/add', usuarioController.abreadd)

router.post('/add', usuarioController.add)

router.get('/edit/:id', usuarioController.abreedit)

router.post('/edit/:id', usuarioController.edit)

router.get('/del/:id', usuarioController.del)

module.exports = router;