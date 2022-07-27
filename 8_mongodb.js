// mongoose is advance driver of mongodb........
//user name - ashish
// password - 12345
//mongodb+srv://ashish:<password>@cluster0.gsm1p.mongodb.net/?retryWrites=true&w=majority
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const url = 'mongodb+srv://ashish:12345@cluster0.gsm1p.mongodb.net/?retryWrites=true&w=majority,connect/FirstDatabase'
const connectionParams = {
    useNewUrlParser: true,
    // useCreateIndex: true,
    useUnifiedTopology: true
}
//using .then to resolve promise.................................................................................
mongoose.connect(url,connectionParams).then(()=>
    console.log('database connected')
)
.catch(()=>{
    console.log("error")
})

// use async/await to resolve promise...........................................................................
// const main = async function () {
//     await mongoose.connect(url, connectionParams)
//     const firstSchema = new mongoose.Schema({ _id: String,
//         name: String
//     });
//     const FirstModal = mongoose.model('User' , firstSchema);
//     let data = new FirstModal({ _id:'1',name: 'ritu' });
//     let result = await data.save()
//     console.log(result)
// }
// main();