const express = require('express')
const { route } = require('./partials/blog.routes')
const blogRoutes = require('./partials/blog.routes')
const userRoutes = require('./partials/user.routes')
const emailRoutes = require('./partials/email.routes')
const dashboardRoutes = require('./partials/dashboard.routes')
const authRoutes = require('./partials/auth.routes')
const isAuthMiddlewere = require('../app/middlewares/isAuth.middlewere')
const websiteRoutes = require('./partials/website.routes')
const router = express.Router()

router.use(websiteRoutes());
router.use(authRoutes());
router.use(isAuthMiddlewere());
router.use(blogRoutes());
router.use(userRoutes());
router.use(emailRoutes());
router.use(dashboardRoutes());

module.exports = ()=> router;