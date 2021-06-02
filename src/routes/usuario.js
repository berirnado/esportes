const express = require('express')

const router = express.Router()

const usuarioController = require('../controller/usuario')

const upload = require('../config/multer')

router.get('/', usuarioController.list)

router.post('/', usuarioController.filtro)

router.get('/add', usuarioController.abreadd)

router.post('/add', upload.Single('foto'), usuarioController.add)

router.get('/edit/:id', usuarioController.abreedit)

router.post('/edit/:id', upload.Single('foto'),  usuarioController.edit)

router.get('/del/:id', usuarioController.del)

module.exports = router;