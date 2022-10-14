const express = require('express');
const app = express();
const cors = require('cors');
const phones = require('./phones.json');

const port = 5000;
app.use(cors());
app.get('/', (req, res)=>{
    res.send("hello from express way")
})
app.get('/', (req, res)=>{
    res.send("It's also home compo")
})
app.get('/home', (req, res)=>{
    res.send("This is home compo");
})
app.get('/phones', (req, res)=>{
    res.send(phones)
})

app.get('/phones/:id', (req, res)=>{
    const id = req.params.id;
    const searchPhone = phones.find(ph=> ph.id === parseInt(id)) || {data:"No Data Found"};
    res.send(searchPhone);
})

app.listen(port, ()=>{
    console.log("app is running on port : ", port);
})