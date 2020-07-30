const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//Connect To DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to DB!');
});

//How to start listening to server
app.listen(3000);
