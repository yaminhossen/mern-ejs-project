const express = require('express');
const isAuthMiddlewere = require('../../app/middlewares/isAuth.middlewere');
const router = express.Router()


router
    .get('/dashboard/user', function (req, res) {
        return res.render('backend/user_management/all')
    })
    .get('/dashboard/create-user', function (req, res) {
        return res.render('backend/create_user')
    })
    .get('/dashboard/user/:id/edit', function (req, res) {
        return res.render('backend/user_management/edit')
    })
    .get('/dashboard/user/:id', function (req, res) {
        return res.render('backend/user_management/show')
    });

module.exports = () => router;