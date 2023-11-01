const {Schema, model} = require('mongoose')

const ProductSchema = Schema({
    productName:{
        type: String,
        required: [true, 'El productName es requerido'],
        unique: true
    },
    description:{
        type: String,
        required: [true, 'La descripcion es requerido'],
        unique: true
    },
    unit:{
        type: String,
    },
    active:{
        type: Boolean,
        default: true
    }
    
})

module.exports = model('Product', ProductSchema)