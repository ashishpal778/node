const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
// const cors = require ('cors')
// const morgan =require('morgan')
const userRoute = require('./api2Route/userRoute')
const DB = "mongodb+srv://arun:a12345@cluster0.gsm1p.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database connected...')
})
app.use(express.json()) // convert input bady data to json
// app.use(cors())
// app.use(morgan('dev'))
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use('/user',userRoute)


module.export = app;