const express = require('express')
const { route } = require('./partials/blog.routes')
const blogRoutes = require('./partials/blog.routes')
const userRoutes = require('./partials/user.routes')
const emailRoutes = require('./partials/email.routes')
const router = express.Router()


router.use(blogRoutes)
router.use(userRoutes)
router.use(emailRoutes)

module.exports = ()=> router;