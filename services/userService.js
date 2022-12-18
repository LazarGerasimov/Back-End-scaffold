const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const JWT_SECRET = 'The most secret secret';

//TODO replace with assignment
async function register(username, password) {
    const existing = await User.findOne({ username }).collation({ locale: 'en', strength: 2 });
    if (existing) {
        throw new Error('Username is taken');
    }
    const hashedPassword = await bcrypt.hash(password, 10); // salt as second param
    const user = await User.create({
        username,
        hashedPassword
    });
    //TODO check if registration creates user session
    const token = createSession(user);
    return token;
}

async function login() {

}
//TODO check assingment 
function createSession(user) {   // create payload for cookie or has to manually log in
    const payload = {
        _id: user._id,
        username: user.username,
    };
    const token = jwt.sign(payload, JWT_SECRET);
    return token;
}

function verifyToken() {

}


module.exports = {
    register,
    login,
    verifyToken
}