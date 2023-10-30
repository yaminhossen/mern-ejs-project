const express = require('express');
const isAuthMiddlewere = require('../../app/middlewares/isAuth.middlewere');
const router = express.Router()
// const server = express();

router
    .post('/login-submit', function (req, res) {
    
        req.session.isAuth = true;
        
        let prevUrl = req.session.prev_auth_url;
        if (prevUrl) {
            delete req.session.prev_auth_url;
            return res.redirect(prevUrl)
        }
        res.redirect('/dashboard')
        // res.json(req.body);
        
    })
    .use(isAuthMiddlewere())
    .get('/logout', function (req, res) {
        console.log('logout api hited');
        req.session.isAuth = false;
        // server.locals.checkIsAuth = false;
        return res.redirect('/');
    })

module.exports = () => router;