
const {Schema, model} = require('mongoose')

const PurchaseSchema = Schema({
    userName:{
        type: Schema.Types.ObjectId,
        ref:'User'


    },
    productName:{
        type: Schema.Types.ObjectId,
        ref:'Product'
       
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