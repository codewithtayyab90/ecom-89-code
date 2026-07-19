const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const connectDB = require('./db-configuration/connect')
const port = process.env.PORT;
const productRouter = require('./routes/products')
const cors = require("cors")
const authRouter = require('./routes/auths')

connectDB()
app.use(express.json())
app.use(cors({origin: "http://localhost:5173"}))
app.use("/", productRouter)
app.use("/", authRouter)
app.all('/*path', (req, res) => {
    res.send('404 Not Found')
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

// CRUD
// C = Create - POST
// R = Read - GET
// U = Update - PATCH/PUT
// D = Delete - DELETE

// Status codes
// 200 - Successful Read
// 201 - Successful Create
// 404 - Resource Not Found
// 400 - Bad Request
// 409 - Validation Error
// 500 - Internal Server Error


// MVC - Model, View, Controller

// REST API - Representational State Transfer Application Programming Interface