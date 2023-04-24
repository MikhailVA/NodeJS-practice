    const express = require('express');

    const app = express();

    /*
    app.use('/', (req, res, next) => {
        console.log('Message #1');
        next();
    });

    app.use('/', (req, res, next) => {
        console.log('Message #2');
        next();
    });
    */
    app.use('/users', (req, res, next) => {
        console.log('Message users');
        res.send('<h1>Users done</h1>');
    });


    app.use('/', (req, res, next) => {
        console.log('Message #1');
        res.send('<h1>Done!</h1>');
    });


    app.listen(3000);