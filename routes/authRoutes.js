const express = require('express')
const router = express.Router()
const authController = require('../Controllers/auth')

router.post('/signup', authController.register)
router.post('/login', authController.login)

module.exports = router