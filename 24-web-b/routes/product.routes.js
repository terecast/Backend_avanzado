const { Router } = require('express')
const { createProduct, readProduct, updateProduct, deleteProduct } = require('../Controllers/productController')
//const { validatePost } = require('../middlewares/validatorSimple')
//const { schema } = require('../validators/userValidator')

const { celebrateProdValidator } = require('../middlewares/celebrateValidator')

const router = Router()


router.post("/product", celebrateProdValidator , createProduct)// C creat
router.get("/product", readProduct) // R read
router.put("/product/:productId", updateProduct) // U Update
router.delete("/product/:productId", deleteProduct) // D delete



module.exports = router