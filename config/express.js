const express = require('express');
const handlebars = require('express-handlebars');
const cookieParser = require('cookie-parser');
const session = require('../middlewares/session');

module.exports = (app) => {
    const hbs = handlebars.create({
        extname: '.hbs'
    });

    app.engine('.hbs', hbs.engine);
    app.set('view engine', '.hbs');

    app.use('/static', express.static('static')); // express boiler
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser()); //can add secret
    app.use(session()); // cookie validation
}