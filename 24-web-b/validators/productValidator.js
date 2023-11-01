const Joi = require('joi')

const productschema = Joi.object().keys({
    productName: Joi.string().min(3).max(50).required().messages({
        "string.base": "El nombre de Producto debe ser un string",
        "string.empty": "El producto no debe estar vacio",
        "string.min": "El nombre del prodcuto debe tener un minimo de {#limit} caracteres",
    }),
    description: Joi.string().max(500).required().messages({
        "string.base": "El producto debe tener descripcion ",
        "string.max": "El nombre del prodcuto debe tener un maximo de {#limit} caracteres"

    }),
    unit: Joi.string().min(1).max(10).required().messages({
        "string.min": "El minimo de {#limit} numeros debe ser 1"
    })
    
})



module.exports = { productschema }