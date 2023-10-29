const express = require('express');
const server = express();
const session = require('express-session')
const bodyParser = require('body-parser');
const allRoutes = require('./routes/all.routes');
const checkAuthMiddleware = require('./app/middlewares/checkAuth.middleware');

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())

module.exports.share_check_auth  =  (data = true) => {
    server.locals.checkIsAuth = data;
}



server.set('trust proxy', 1) // trust first proxy
server.use(session({
    secret: 's3Cur3',
    name: 'session1'
}))

server.set('view engine', 'ejs')
server.set('views', './views')
server.use(express.static('public'))

const checkAuth = (req, res, next) => {
    console.log('ldfjdklsjfkljkls',req.session);
    if(req.session.isAuth === true){
        server.locals.checkIsAuth = true;
    }else{
        server.locals.checkIsAuth = false;
    }
    next();
}

server.use(checkAuth);
server.locals.checkIsAuth = false;


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

server.use(allRoutes());


server.listen(5005, () => {
    console.log(`app is listening on http://127.0.0.1:5005`);
})