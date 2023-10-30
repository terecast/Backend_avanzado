const {response, request} = require ('express')
const User = require('../Models/userModel')

const createUser = async (req, res) => {
try { 
    const { body } = req
    const user = new User(body)
    await user.save()
    res.status(201).json({
        user
    })
    
} catch (error) {
    res.status(500).json({
        msg: "Algo ocurrio al crear al usuario", error
    })
    }
}

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
    createUser,
    deleteUser,
    readUser,
    updateUser
}