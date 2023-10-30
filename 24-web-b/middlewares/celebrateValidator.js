const { celebrate, Segments }= require("celebrate")
const { schema } = require('../validators/userValidator')

const celebrateValidator = celebrate({
    [Segments.BODY] : schema
})
module.exports = { celebrateValidator }
