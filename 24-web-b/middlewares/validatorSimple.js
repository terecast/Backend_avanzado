function validatePost (schema){
    return (req, res, next) => {
        const { error } = schema.validate(req.body)

        if(error){
            return res.status(403).json({
                msg: error.details[0].message
            })
        }
        next()

    }

}

function validateProductCreated (productschema){
    return (req, res, next) => {
        const { error } = productschema.validate(req.body)

        if(error){
            return res.status(403).json({
                msg: error.details
            })
        }
        next()
    }
}

module.exports = { validatePost, validateProductCreated }