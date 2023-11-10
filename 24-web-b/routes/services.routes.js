const { Router } = require('express');

const { 
  serviceGet, 
  servicePost, 
  servicePut, 
  serviceDel 
} = require('../Controllers/servicesController')

const router = Router()

//CRUD 
router.post("/services", servicePost );//C
router.get("/services", serviceGet );//R
router.put("/services/:serviceid", servicePut ); //U
router.delete("/services/:servicesid", serviceDel );//D

module.exports = router