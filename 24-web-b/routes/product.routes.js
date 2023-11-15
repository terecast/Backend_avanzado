const { Router } = require('express')
const { createProduct, readProduct, updateProduct, deleteProduct } = require('../Controllers/productController')
//const { validatePost } = require('../middlewares/validatorSimple')
//const { schema } = require('../validators/userValidator')

const { celebrateProdValidator } = require('../middlewares/celebrateValidator')

const router = Router()


router.post("/", celebrateProdValidator , createProduct)// C creat
router.get("/", readProduct) // R read
router.put("/:productId", updateProduct) // U Update
router.delete("/:productId", deleteProduct) // D delete



module.exports = router