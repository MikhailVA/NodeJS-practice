const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false}));

const usersarray = [];


app.get('/', (req, res, next) => {
    res.render('main', {
        pageTitle: 'Main Page',
        activeMain: true
    });
});

app.get('/users', (req, res, next) => {
    res.render('users', {
        pageTitle: 'Users',
        activeUsers: true,
        usersList: usersarray
    });
});

app.post('/add-user', (req, res, next) => {
    usersarray.push({ title: req.body.title });
    res.redirect('/users');
});

app.listen(3000);