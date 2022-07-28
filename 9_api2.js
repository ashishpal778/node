//api using monggose(mongodb) and express(node js) js
const express = require('express')
// user =arun    //Password= a12345
const app = express()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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
const hostname = '0.0.0.0'
const PORT = process.env.PORT || 2000
app.use(express.json()) // convert input bady data to json 
app.listen(PORT, hostname, () => {
    console.log(`Server is running on PORT ${PORT}`)
})

app.post('/signup', (req, res, next) => {
    console.log('post api running');
    console.log(req.body.user)
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        console.log("hello", hash)
        if (err) {
            return res.ststus(500).json({
                error: err
            })
        }
        else {
            let user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(result => {
                    console.log(result)
                    res.status(200)
                    res.send(result)
                })
                .catch(err => {
                    res.status(500).json({
                        error: err
                    })
                })
        }
    })
})

// app.post('/signup', async (req, res) => {
//     let data = new User(req.body);
//     console.log(req.body.password)
//     try {
//         let result = await data.save()
//         // console.log(result)
//         res.send(result)
//     }
//     catch (err) {
//         res.status(500).send(err);
//     }
// })
app.post('/signin', (req, res, next) => {
    console.log(req.body.name)
    User.find({ name: req.body.name })
        // .exec()
        .then(user => {
            if (user.length < 1) {
                return res.status(4001).json({ msg: 'user not exist' })
            }
            bcrypt.compare(req.body.password, user[0].password, (err, result) => {
                if (!result) {
                    return res.status(401).json({
                        msg: 'password matching failed'
                    })
                }
                if (result) {
                    const token = jwt.sign({
                        username: user[0].name,
                        usermail: user[0].email,

                    },
                        'this is dummy text',
                        {
                            expiresIn: '12000h'
                        }
                    );
                    res.status(200).json({
                        username: user[0].name,
                        usermail: user[0].email,
                        token: token
                    })
                }
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })

})
// app.get('/signin', async (req, res) => {
//     const data = await User.find({})
//     try {
//         res.send(data)
//         console.log(data)
//     }
//     catch (err) {
//         res.status(500).send(err)
//     }
// })
