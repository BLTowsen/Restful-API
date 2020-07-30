const express = require('express');

const app = express();

//ROUTES
app.get('/', (req, res) => {
    res.send('We are on home');
});

app.get('/posts', (req, res) => {
    res.send('We are on posts');
});

//How to start listening to server
app.listen(3000);
