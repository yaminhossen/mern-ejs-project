const express = require('express');
const router = express.Router()
const server = express();

router.get('/logout', function (req, res) {
    console.log('logout api hited');
    req.session.isAuth = false;
    server.locals.checkIsAuth = false;
    res.redirect('/');
})

module.exports = () => router;