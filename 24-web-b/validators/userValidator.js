const Joi = require('joi')

const schema = Joi.object().keys({
    userName: Joi.string().min(3).max(30).required().messages({
        "string.base": "El nombre de usuario debe ser un string",
        "string.empty": "El usuario no debe estar vacio",
        "string.min": "El nombre de usuario debe tener un minimo de {#limit} caracteres",
    }),
    email: Joi.string().email().required().messages({
        "string.email": "El email debe tener un formato valido",

    }),
    phoneNumber: Joi.number().min(8).messages({
        "number.min": "El minimo de {#limit} numeros debe ser 8"
    }),
    password: Joi.string().min(6).max(30).required().messages({
        "string.min": "El Password debe tener minimo 6 caracteres "
    })
    
})



module.exports = { schema }