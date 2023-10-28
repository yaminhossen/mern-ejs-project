const express = require('express');
const isAuthMiddlewere = require('../../app/middlewares/isAuth.middlewere');
const router = express.Router()


router
    .get('/dashboard/email', function (req, res) {
        return res.render('backend/email_management/all')
    })
    .get('/dashboard/create-email', function (req, res) {
        return res.render('backend/create_email')
    })
    .get('/dashboard/email/:id/edit', function (req, res) {
        return res.render('backend/email_management/edit')
    })
    .get('/dashboard/email/:id', function (req, res) {
        return res.render('backend/email_management/show')
    });

module.exports = () =>  router;