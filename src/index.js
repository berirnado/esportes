const express = require('express')
const app = express();
var porta = 3000
var produtoRoute = require('./routes/produto')
var quadraRoute = require('./routes/quadra')
var caixaRoute = require('./routes/caixa')

const bodyParser = require('body-parser')
const path = require('path')
const flash = require('req-flash')
var session = require('express-session')

require('./database/migrations/index')

app.use(session({secret:'123', resave: true, saveUninitialized: true}))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(flash())

app.set('view engine', 'ejs')
app.set('views', 'src/views')

app.use(express.static(path.join("src", "public")))

app.use('/admin/produto', produtoRoute)
// app.use('/admin/quadra', quadraRoute)
// app.use('/caixa', caixaRoute)

app.listen(porta)