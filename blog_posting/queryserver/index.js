const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const axios = require('axios');
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());


app.listen("4002",()=>{
    console.log("Query is active bring it on");
})
