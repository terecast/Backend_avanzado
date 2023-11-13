const jwt = require("jsonwebtoken")

const validateToken = (secret) => {
    return (req, res, next) => {
        const { authorization } = req.headers
        token = authorization.split(" ")[1]
        
        const payload = jwt.verify(token, secret)
        const isAdmin = payload.userName === "Pablo"
        if(isAdmin) {
            next()
        }else{
            return res.status(403).json({
                msg: "El usuarion no es Administrador"
            })
        }
        return res.status(201).json({
            headers: req.headers
        })
    }
}


module.exports = { 
    validateToken 
}