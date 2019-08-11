const express  = require('express');
const mongoose = require('mongoose')
const cors     = require('cors')

const routes   = require('./routes.js');

const server   = express()

const config   = require('./config.js');

//conexão com o banco
mongoose.connect(config, {
  useNewUrlParser: true
})

server.use(cors())
server.use(express.json())
server.use(routes)

server.listen(3333)