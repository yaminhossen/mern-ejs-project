const express = require('express');
const isAuthMiddlewere = require('../../app/middlewares/isAuth.middlewere');
const router = express.Router()

router.get('/dashboard', function (req, res) {
    console.log(req.session);
    return res.render('backend/dashboard')
})

module.exports = () => router;