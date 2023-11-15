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

// Aqui puse lo de user
const readUser = async (req, res) => {
    try {
        const { limit = 10 } = req.query
        const queryParam = {active:true}
        const recordLength = await User.countDocuments()
        const user = await User.find(queryParam).limit(Number(limit))
        res.json({
            recordLength, user
        })
        
    } catch (error) {
        res.status(500).json({
            msg: "Algo ocurrio al leer usuario", error
        })  
    }  
}

const updateUser = async (req, res) => {
    try {
    const { params, body } = req
    const { userId } = params
    await User.findByIdAndUpdate(userId, body)
    const userToShow = await User.findById(userId)
    res.status(202).json({
        msg:"los usuarios se Modificaron correctamente", userToShow

    })
        
    } catch (error) {
        res.status(500).json({
            msg:"Algo ocurrio al modificar el registro", error
          })
    }
  }
  
  const deleteUser = async (req, res) =>{
    try {
        const { userId } = req.params
        const deleteState = {"active": false}
        await User.findByIdAndUpdate(userId)
        const userToShow = await User.findById(userId, deleteState)
        res.status(202).json({
            msg: 'Se borro el registro', userToShow
        })
        
    } catch (error) {
        res.status(500).json({
            msg:"Algo ocurrio al borrar el registro", error
          })
        
    }
    
  }
  




module.exports = {
    registerUser,
    loginUser,
    readUser,
    updateUser,
    deleteUser


}