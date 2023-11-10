const { Router } = require('express')
const { registerUser, loginUser } = require('../Controllers/registerController')

const router = Router()

router.post('/register', registerUser)
router.post('/login', loginUser)

module.exports = router