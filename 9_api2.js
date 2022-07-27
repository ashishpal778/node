const express = require('express')
// user =arun
//Password= a12345
const app = express()
const User = require('./apiModels/userModel');
const mongoose = require('mongoose');
const { response } = require('express');
const DB = "mongodb+srv://arun:a12345@cluster0.gsm1p.mongodb.net/?retryWrites=true&w=majority"
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database connected...')
})

app.use(express.json()) // convert input bady data to json 
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
})


app.post('/signup', async (req, res) => {
    // let { name, email, password } = req.body
    let data = new User(req.body);
    let result = await data.save()
    console.log(result)
    res.send(result)

    // try {
    //     let user = new User({
    //         name,
    //         email,
    //         password
    //     })
    //     let createdUser = await user.save()
    //     res.status(201).json({
    //         status: 'Success',
    //         data: {

    //             createdUser
    //         }
    //     })
    // } catch (err) {
    //     console.log(err)
    // }
})


