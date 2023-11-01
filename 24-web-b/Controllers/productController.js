const {response, request} = require ('express')
const Product = require('../Models/productModel')

const createProduct = async (req, res) => {
try { 
    const { body } = req
    const item = new Product(body)
    await item.save()
    res.status(201).json({
        item
    })
    
} catch (error) {
    res.status(500).json({
        msg: "Algo ocurrio al crear el producto", error
    })
    }
}

const readProduct = async (req, res) => {
    try {
        const { limit = 10 } = req.query
        const queryParam = {active:true}
        const recordLength = await Product.countDocuments()
        const item = await Product.find(queryParam).limit(Number(limit))
        res.json({
            recordLength, item
        })
        
    } catch (error) {
        res.status(500).json({
            msg: "Algo ocurrio al leer producto", error
        })  
    }  
}

const updateProduct = async (req, res) => {
    try {
    const { params, body } = req
    const { productId } = params
    await Product.findByIdAndUpdate(productId, body)
    const itemToShow = await Product.findById(productId)
    res.status(202).json({
        msg:"los usuarios se Modificaron correctamente", itemToShow

    })
        
    } catch (error) {
        res.status(500).json({
            msg:"Algo ocurrio al modificar el producto", error
          })
    }
  }
  
  const deleteProduct = async (req, res) =>{
    try {
        const { productId } = req.params
        const deleteState = {"active": false}
        await Product.findByIdAndUpdate(productId)
        const userToShow = await User.findById(productId, deleteState)
        res.status(202).json({
            msg: 'Se borro el registro', itemToShow
        })
        
    } catch (error) {
        res.status(500).json({
            msg:"Algo ocurrio al borrar el registro", error
          })
        
    }
    
  }
  


module.exports = {
    createProduct,
    deleteProduct,
    readProduct,
    updateProduct
}