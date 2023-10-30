function validatePost (schema){
    return (req, res, next) => {
        const { error } = schema.validate(req.body)

        if(error){
            return res.status(403).json({
                msg: error.datails[0].message
            })
        }
        next()

    }

}

module.exports = { validatePost }