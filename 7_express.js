//express is framwork of node js
const express = require('express');
const app = express();
app.get("", (req, resp) => {
    console.log("data sent by browser", req.query.name)
    resp.send("Hello node js, how are you now"+ req.query.name) // we can't use ',' inplace of '+' oprator
})
app.get("/about", (req, resp) => {
    resp.send("Hello about page, how are you now")
})
app.listen(2000)