const express = require('express');
const isAuthMiddlewere = require('../../app/middlewares/isAuth.middlewere');
const { share_check_auth } = require('../..');
const router = express.Router()
// const server = express();
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
    

module.exports = () => router;