const express = require("express");
require('dotenv').config();
const _detectIntent = require('./detectIntent');
const app = express();
const port = 3000;


app.get("/detectintent/:text", async (req, res)=>{
    const msg = req.params.text;
    const response = await _detectIntent(msg);
    console.log('respuesta: ' + response);
    return res.send(response);
});     

app.listen(port, res =>{
    console.log('Escuchando en el puerto: '+port);
})