const express = require('express');
const app = express();
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');
const commentsById = [];
const axios = require('axios');
const cors = require('cors');
app.use(bodyParser.json());
app.use(cors());

app.get('/posts/:id/comments',(req,res)=>{
    res.send(commentsById[req.params.id] || []);
})

app.post('/posts/:id/comments',(req,res)=>{
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;

    const c = commentsById[req.params.id] || [];
    c.push({
        id:commentId,content
    })
    commentsById[req.params.id] = c;
    res.send(commentsById[req.params.id]);

    axios.post("http://localhost:4005/events",{
        type:"CommentsCreated",
        data:{
            id:commentId,
            content,
            postId:req.params.id
        }
    })

})

app.post('/events',(req,res)=>{
    console.log(req.body);
})

app.listen(4001,()=>{
    console.log("Comments Service is Workng");
})  