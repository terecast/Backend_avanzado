const express = require ('express')
const cors = require ('cors')
const Database = require('./db/config')
const { errors } = require('celebrate')

class Server {
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 3001
        this.database = new Database()
        
        this.servicePath = '/api/services'
        this.userPath = '/api/auth'
        this.productPath = '/api/product'
        this.purchasePath = '/api/purchase'

        //Middleware
        this.middlewares()
        //Database Connections
        this.dbConnection()
        this.router()
    }

    async dbConnection(){
        await this.database.dbConnection()
    }

    middlewares(){
        this.app.use(cors());
        //Este middleware sirve para recibir datos
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended:false}))
        //Public
        this.app.use(express.static('public'))


    }

    router(){
        this.app.use(this.userPath, require('./routes/users.routes'), errors())
        this.app.use(this.productPath, require('./routes/product.routes'), errors())
        this.app.use(this.servicePath, require('./routes/services.routes'));
        this.app.use(this.purchasePath, require('./routes/purchase.routes'));

    }



    listen(){
        this.app.listen(this.port, () => {
            console.log(`Esta aplicacion corre en el puerto ${this.port}`)
        })
    }
}

module.exports = Server