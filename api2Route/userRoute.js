const express = require('express');
const router = express.Router();

const userModel = require('../api2Models/userModel')
const bcrypt = require('bcrypt')


router.post('/', (req,res,next)=>{
    console.log('post api running');
    bcrypt.hash(req.body.password,10,(err,hash)=>{
        if(err){
            return res.ststus(500).json({
                error:err
            })
        }
        else{
            let user = new userModel({
                name:req.body.name,
                email:res.body.email,
                password: hash
            });
            user.save()
            .then(result=>{
                console.log(result)
                res.status(200).json({
                    new_user:result
                })
            })
            .catch(err=>{
                res.status(500).json({
                    error:err
                })
            })

        }
    })
})

module.exports =router