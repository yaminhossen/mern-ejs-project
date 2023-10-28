const express = require('express');
const isAuthMiddlewere = require('../../app/middlewares/isAuth.middlewere');
const router = express.Router()
const server = express();
router
    .get('/', function (req, res) {
        return res.render('home')
    })
    .get('/about', function (req, res) {
        return res.render('about')
    })
    .get('/login', function (req, res) {

        return res.render('auth/login')
    })
    .post('/login-submit', function (req, res) {

        req.session.isAuth = true;
        server.locals.checkIsAuth = true;
        let prevUrl = req.session.prev_auth_url;
        if (prevUrl) {
            delete req.session.prev_auth_url;
            return res.redirect(prevUrl)
        }
        res.redirect('/dashboard')
        // res.json(req.body);

    })

module.exports = () => router;