const { Router } = require('express');
const { createPurchase, readPurchase, deletePurchase, updatePurchase} = require('../Controllers/purchaseController');


const router = Router()

router.post("/", createPurchase)// C creat
router.get("/", readPurchase) // R read
router.put("/:purchaseId", updatePurchase) // U Update
router.delete("/:purchaseId", deletePurchase) // D delete



module.exports = router