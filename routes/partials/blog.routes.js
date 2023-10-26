const express = require('express');
const isAuthMiddlewere = require('../../app/middlewares/isAuth.middlewere');
const router = express.Router()


router
    // .use(isAuthMiddlewere)
    .get('/dashboard/blog', function (req, res) {
        return res.render('backend/blog_management/all')
    })
    .get('/dashboard/create-blog', function (req, res) {
        return res.render('backend/create_blog')
    })
    .get('/dashboard/blog/:id/edit', function (req, res) {
        return res.render('backend/blog_management/edit')
    })
    .get('/dashboard/blog/:id', function (req, res) {
        return res.render('backend/blog_management/show')
    });

module.exports =()=> router;