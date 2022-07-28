//api using monggose(mongodb) and express(node js) js
const express = require('express')
// user =arun    //Password= a12345
const app = express()
const User = require('./api2Models/userModel');
const mongoose = require('mongoose');
const { response } = require('express');
const DB = "mongodb+srv://arun:a12345@cluster0.gsm1p.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database connected...')
})
const hostname ='0.0.0.0'
const PORT =process.env.PORT || 3000
app.use(express.json()) // convert input bady data to json 
app.listen(PORT,hostname ,() => {
    console.log(`Server is running on PORT ${PORT}`)
})
app.post('/signup', async (req, res) => {
    let data = new User(req.body);
    try {
        let result = await data.save()
        console.log(result)
        res.send(result)
    }
    catch (err) {
        res.status(500).send(err);
    }
})
app.get('/signin', async (req, res) => {
    const data = await User.find({})
    try {
        res.send(data)
        console.log(data)
    }
    catch (err) {
        res.status(500).send(err)
    }
})
