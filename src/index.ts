import express  from 'express'
import cors from 'cors'

import {createConnection} from 'typeorm'

import cityRoute from './routes/city.route'

const app = express()



createConnection().then((conn) => {

    app.use(cors())

    app.use(express.json())
    
    app.use('/',cityRoute)
    app.listen(5000,() => {
        console.log("running on port 5000")
    })
})


