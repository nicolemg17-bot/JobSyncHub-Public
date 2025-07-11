let users = []
let currentId = 1

function getUsers(req, res) {
  res.json(users)
}

function createUser(req, res) {
  const { name, email, password } = req.body

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' })
  }

  const newUser = {
    id: currentId++,
    name,
    email,
    password
  }

  users.push(newUser)
  res.status(201).json(newUser)
}

module.exports = { getUsers, createUser }
