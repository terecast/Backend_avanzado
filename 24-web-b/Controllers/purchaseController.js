const {response, request, query} = require ('express')
const jwt = require("jsonwebtoken")

const User = require ('../Models/userModel')

const Purchase = require('../Models/purchaseModel');

const createPurchase = async (req, res) => {
    try { 
        const order = new Purchase(req.body)
        await order.save()
        res.status(201).json({
            order
        })
        
    } catch (error) {
        res.status(500).json({
            msg: "Algo ocurrio al hacer la compra", error
        })
        }
    }

    const readPurchase = async(req = request, res = response) => {
        try {
          const queryParam = {active:true};
      
          const numeroDeOrdenes = await Purchase.countDocuments()

          const { authorization } = req.headers
          token = authorization.split(" ")[1]
         
          const payload = jwt.verify(token, "cambiame-por-algo-seguro")
          const isAdmin = payload.userName === "Pablito"
        
          let orderList 
          

          if(!isAdmin){
            orderList = await Purchase.find({userName:payload.id}).populate(["userName","productName"]);
          }else{
            orderList = await Purchase.find(queryParam).populate(["userName","productName"]);
          }

          res.status(200).json({
            total: numeroDeOrdenes,
            orderList})
        } catch (error) {
          res.status(500).json({
            message:'Algo Ocurrio al listar las ordeneS',
          })
        }
        
    }

    const deletePurchase = async(req = request, res = response ) => {
        try {
          const {id} = req.params
          const falseActive = {active: false}
          await Purchase.findByIdAndUpdate(id, falseActive)
        
          res.status(200).json({
            message: ` La compra con el id: ${id} fue eliminada`,
          })
          
          } catch (error) {
            res.status(500).json({
              message:"Algo salio mal cuando intentabamos eliminar la compra"
          })
        }
    }

    const updatePurchase = async (req, res) => {
        try {
        const { params, body } = req
        const { Id } = params
        await Purchase.findByIdAndUpdate(Id, body)
        const orderToShow = await Purchase.findById(Id)
        res.status(202).json({
            msg:"la Orden se modifico correctamente", orderToShow
    
        })
            
        } catch (error) {
            res.status(500).json({
                msg:"Algo ocurrio al modificar la orden", error
              })
        }
      }


      module.exports = {
        readPurchase,
        createPurchase,
        deletePurchase,
        updatePurchase
      }