const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/user')

const SECRET = process.env.SECRET // use process.env.SECRET in production

// POST /auth/register
exports.register = async (req, res) => {
  try {
    const { username, password , role } = req.body

    // check if username taken
    const existing = await User.findOne({ username })
    if (existing) {
      return res.status(400).json({ message: 'Username already exists' })
    }

    // hash password
    const passwordHash = await bcrypt.hash(password, 8)


    // create user
    const newUser = new User({ username, passwordHash, role })
    await newUser.save()

    res.status(201).json({ message: 'User registered successfully' })
  } catch (err) {
    res.status(500).json({ err: err.message })
  }
}

// POST /auth/login
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.findOne({ username })

    if (!user) {
      return res.status(401).json({ message: 'Invalid username or password' })
    }

    const isValid = await user.validatePassword(password)
    if (!isValid) {
      return res.status(401).json({ message: 'Invalid username or password' })
    }

    const payload = {
      id: user._id
      // Add anything else that you want to put into the JWT token here
    }
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: '24h' }) //Look at the docs for more 'expires in' options
    res.json({ token })
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: 'Server error' })
  }
}