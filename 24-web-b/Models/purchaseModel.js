
const {Schema, model} = require('mongoose')

const PurchaseSchema = Schema({
    userName:{
        type: String,
        required: true
       
    },
   
    productName:{
        type: String,
        required: true
        
    },
   
    purchasedPcs:{
        type: Number,
        required: true
    },
    active:{
        type: Boolean,
        default: true
    }
    
})

module.exports = model('Purchase', PurchaseSchema)