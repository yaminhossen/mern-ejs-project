const express = require('express');
const server = express();
const session = require('express-session')
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())

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
server.post('/login-submit', function (req, res) {
    // console.log(req.session);
    req.session.isAuth = true;
    res.json(req.body);
    // return res.render('auth/login')
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