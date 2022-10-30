const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

posts = {};

app.get("/posts",(req,res)=>{
    res.send(posts);
})

app.post("/events",(req,res)=>{
    const type = req.body.type;
    const { data } = req.body;
    if(type=="PostCreated"){
        const { id, title } = data;
        posts[id] = {
            id, title, comments: []
        };
    }
    if(type=="CommentsCreated"){
        const { id,content,postId } = req.body.data;
        postacomm = posts[postId];
        debugger;
        postacomm.comments.push({
            id,content
        })
    }
    console.log(posts);
})


app.listen("4002",()=>{
    console.log("Query is active bring it on");
})
