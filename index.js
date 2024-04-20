const express = require('express');
const users = require('./user.json');
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json())

app.get('/', (req, res)=>{
    res.send('this is my data server')
});

app.get('/user', (req , res)=>{
    res.send(users)
})

app.post('/user', (req, res)=>{
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser)
    res.send(newUser)
    console.log(newUser);
})

app.listen(port, ()=>{
    console.log(`this data running on port: ${port}`);
})