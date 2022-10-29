const express = require('express');
const app = express();
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');
const posts = {};
const cors = require('cors');
app.use(bodyParser.json());

app.use(cors());

app.get('/',(req,res)=>{
    res.send("This is nice");
})

app.get('/posts',(req,res)=>{
    res.send(posts);
})

app.post('/posts',(req,res)=>{
    const id = randomBytes(4).toString('hex');
    const { title }  = req.body;
    posts[id] = {
        id,title
    }
    res.send("Added post success");
})

app.delete('/posts/:id/delete',(req,res)=>{
    delete posts[req.params.id];
    res.send("Deletion Success");
})

app.listen(4000,()=>{
    console.log("Yesssss");
})  