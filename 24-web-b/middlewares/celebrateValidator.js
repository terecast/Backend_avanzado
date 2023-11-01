const { celebrate, Segments }= require("celebrate")
const { schema } = require('../validators/userValidator')
const { productschema } = require('../validators/productValidator')

const celebrateValidator = celebrate({
    [Segments.BODY] : schema
})

const celebrateProdValidator = celebrate({
    [Segments.BODY] : productschema
})
module.exports = { celebrateValidator, celebrateProdValidator }
