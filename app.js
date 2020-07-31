const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();

//Middlewares
app.use(cors());
app.use(bodyParser.json());
//Import Routes
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');

app.use('/posts', postsRoute);
app.use('/users', usersRoute);


//Home route
app.get('/', (req, res) => {
    res.send('We are on home');
    res.end();
});

//Connect To DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('Connected to DB!');
});

//How to start listening to server
app.listen(3000);
