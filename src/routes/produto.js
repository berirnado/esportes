const express = require('express')

const router = express.Router()

const produtoController = require('../controller/produto')

router.get('/', produtoController.list)

router.post('/', produtoController.filtro)

router.get('/add', produtoController.abreadd)

router.post('/add', produtoController.add)

router.get('/edit/:id', produtoController.abreedit)

router.post('/edit/:id', produtoController.edit)

router.get('/del/:id', produtoController.del)

module.exports = router;