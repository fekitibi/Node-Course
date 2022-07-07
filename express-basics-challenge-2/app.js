const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const usersRouter = require('./routes/users');
const rootRouter = require('./routes/root');
const rootDir = require('./util/path');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(rootDir, 'public')));

app.use('/users', usersRouter);
app.use(rootRouter);

app.use((req, res, next)=>{
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000);