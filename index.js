const express = require('express');
const server = express();
const session = require('express-session')
const bodyParser = require('body-parser');
const allRoutes = require('./routes/all.routes');
const checkAuthMiddleware = require('./app/middlewares/checkAuth.middleware');
const mongoose = require('mongoose');

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

server.use((req, res, next) =>{
    checkAuthMiddleware(server, req, res, next);
    next();
});

// routes
 
server.use(allRoutes());

server.listen(5005, () => {
    console.log(`app is listening on http://127.0.0.1:5005`);
})

mongoose.connect('mongodb://127.0.0.1:27017/test');