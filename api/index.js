const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const { getUsers, createUser } = require('./api/users')

const app = express()
app.use(cors())
app.use(bodyParser.json())

app.get('/users', getUsers)
app.post('/users', createUser)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
