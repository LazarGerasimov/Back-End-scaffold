const { register } = require('../services/userService');
const { parseError } = require('../util/parser');

const authController = require('express').Router();

authController.get('/register', (req, res) => {
    //TODO replace with actual view
    res.render('register', {  //view + options
        title: 'Register Page'
    });
});

authController.post('/register', async (req, res) => {
    try {
        // console.log(req.body);
        if (req.body.username == '' || req.body.password == '') {
            throw new Error('All fields are required');
        }
        if (req.body.password !== req.body.repass) {
            throw new Error('Passwords do not match');
        }
        const token = await register(req.body.username, req.body.password);
        res.cookie('token', token);
        res.redirect('/auth/register');
    } catch (error) {
        const errors = parseError(error); //split error
        //TODO add actual error display
        res.render('register', {
            title: 'Register Page',
            errors,
            body: {
                username: req.body.username
            }
        });
    }

});


module.exports = authController;