const {res, req } = require('express')
const bcrypt = require('bcryptjs')
const User = require ('../Models/userModel')
const jwt = require("jsonwebtoken")

const registerUser = async (req, res) => {
    try {
        const { userName, password, email } = req.body

        const user = await User.findOne({ userName })
        
        if(!user) {
            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hashSync(password, salt)
           
            const user = new User ({userName, email, password: hashedPassword})
            await user.save()

            res.status(201).json({
                message: "El usuario fue creado correctamente"
            })

        }else{
            res.status(403).json({
                message: "El nombre ya existe"
            })
        }
        

    } catch (error) {
        res.status(500).json({
            msg: "Algo ocurrio el crear Usuario",
            error
        })
    }
            
}
const loginUser = async (req, res) => {
    const { userName, password } = req.body
    
    const user = await User.findOne ({ userName })
    if(!user) {
        return res.status(403).json({
            msg: "El usuario no fue encontrado"
        })
    }
    const correctPassword = bcrypt.compareSync(password, user.password)
    console.log(correctPassword)
    console.log(user.password)

    if(correctPassword) {
        const token = jwt.sign({ id: user._id, userName: user.userName}, "cambiame-por-algo-seguro")

        res.status(200).json({
            token
        })

    }else{
        res.status(403).json({
            msg: "La contrasena no es correcta "
        })
    }
}

module.exports = {
    registerUser,
    loginUser
}