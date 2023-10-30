const { Router } = require('express')
const { createUser, readUser,updateUser,deleteUser } = require('../Controllers/usersController')
//const { validatePost } = require('../middlewares/validatorSimple')
//const { schema } = require('../validators/userValidator')

const { celebrateValidator } = require('../middlewares/celebrateValidator')

const router = Router()


router.post("/", celebrateValidator , createUser)// C creat
router.get("/", readUser) // R read
router.put("/:userId", updateUser) // U Update
router.delete("/:userId", deleteUser) // D delete



module.exports = router