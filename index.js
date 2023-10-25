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
server.locals.checkIsAuth = false;

const isAuth = (req, res, next) => {
    console.log(req.originalUrl);
    if (req.session.isAuth) {
        next();
    } else {
        req.session.prev_auth_url = req.originalUrl;
        res.redirect('/login')
    }
}

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
server.get('/dashboard', isAuth, function (req, res) {
    console.log(req.session);
    return res.render('backend/dashboard')
})
server.get('/dashboard/create-blog', isAuth, function (req, res) {
    return res.render('backend/create_blog')
})
server.get('/logout', isAuth, function (req, res) {
    req.session.isAuth = false;
    server.locals.checkIsAuth = false;
    res.redirect('/');
})

server.listen(5005, () => {
    console.log(`app is listening on http://127.0.0.1:5005`);
})