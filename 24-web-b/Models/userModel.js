const {Schema, model} = require('mongoose')

const UserSchema = Schema({
    userName:{
        type: String,
        required: [true, 'El userName es requerido'],
        unique: false
    },
    email:{
        type: String,
        required: [true, 'El email es requerido'],
        unique: true
    },
    phoneNumber:{
        type: Number,
    },
    password:{
        type:String,
        required: [true, 'El Pass es requerido']
    },
    active:{
        type: Boolean,
        default: true
    }
    
})

module.exports = model('User', UserSchema)