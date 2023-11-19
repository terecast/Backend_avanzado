const { Router } = require('express')
const { registerUser, loginUser, readUser,updateUser,deleteUser } = require('../Controllers/userController')

//const { validatePost } = require('../middlewares/validatorSimple')
//const { schema } = require('../validators/userValidator')

const { celebrateValidator } = require('../middlewares/celebrateValidator')
const { validateToken } = require('../middlewares/jwtValidator')

const router = Router()

router.post('/register',registerUser) // C Create
router.post('/login', loginUser)
router.get("/", readUser) // R read
router.put("/:userId", updateUser) // U Update
router.delete("/:userId", deleteUser) // D delete


module.exports = router