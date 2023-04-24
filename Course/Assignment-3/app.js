const express = require('express');
const path = require('path');

const userRouter = require('./users');

const app = express();


app.use(express.static(path.join(__dirname, 'styles')));
app.use(userRouter);

app.use('/', (req, res, next) => {
    res.send('<h1>Empty!</h1>');
});

app.listen(3000);