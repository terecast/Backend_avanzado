const { Router } = require('express')
const { createUser, readUser,updateUser,deleteUser } = require('../Controllers/usersController')
//const { validatePost } = require('../middlewares/validatorSimple')
//const { schema } = require('../validators/userValidator')

const { celebrateValidator } = require('../middlewares/celebrateValidator')
const { validateToken } = require('../middlewares/jwtValidator')

const router = Router()


router.post("/user", validateToken("cambiame-por-algo-seguro"), celebrateValidator, createUser)// C creat
router.get("/user", readUser) // R read
router.put("/user/:userId", updateUser) // U Update
router.delete("/user/:userId", deleteUser) // D delete



module.exports = router