const { register } = require('../services/userService');

const authController = require('express').Router();

authController.get('/register', (req, res) => {
    //TODO replace with actual view
    res.render('register', {  //view + options
        title: 'Register Page'
    });
});

authController.post('/register', async (req, res) => {
    // console.log(req.body);
    const token = await register(req.body.username, req.body.password);
    res.cookie('token', token);
    res.redirect('/auth/register');
});


module.exports = authController;