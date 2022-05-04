import express from 'express'
import cors from 'cors'
import connectDB from './database'


const app = express()

app.use(cors())

app.use(express.json())

app.get('/', (req,res) => {
    res.send("hello world")
})



connectDB().then(() => {
    app.listen(5000, () => {
        console.log("Running on port 5000")
    })
})

