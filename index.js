const express = require('express');
const server = express();
const session = require('express-session')

server.set('trust proxy', 1) // trust first proxy
server.use(session({
    secret: 's3Cur3',
    name: 'session1'
}))

server.set('view engine', 'ejs')
server.set('views', './views')
server.use(express.static('public'))

server.get('/', function (req, res) {
    return res.render('home')
})

server.get('/about', function (req, res) {
    return res.render('about')
})
server.get('/login', function (req, res) {
    return res.render('auth/login')
})
server.get('/dashboard', function (req, res) {
    console.log(req.session);
    return res.render('backend/dashboard')
})
server.get('/dashboard/create-blog', function (req, res) {
    return res.render('backend/create_blog')
})

server.listen(5005, () => {
    console.log(`app is listening on http://127.0.0.1:5005`);
})