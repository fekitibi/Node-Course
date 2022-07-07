const http = require('http');

const express = require('express');

const app = express();

/*app.use('/', (req, res, next)=>{
    console.log('First middleware!');
    next();
});

app.use('/', (req, res, next)=>{
    console.log('Second middleware!');
    next();
});

app.use('/', (req, res, next)=>{
    res.send('<h1>Challange1</h1>');
});*/

app.use('/users', (req, res, next)=>{
    res.send('<h1>Users page!</h1>');
});

app.use('/', (req, res, next)=>{
    res.send('<h1>General page!</h1>');
});

app.listen(3000);