const authController = require('express').Router();

authController.get('/register', (req, res) => {
    //TODO replace with actual view
    res.render('register', {  //view + options
        title: 'Register Page'
    });
});

authController.post('/register', async (req, res) => {
    console.log(req.body);

    res.redirect('/auth/register');
});


module.exports = authController;