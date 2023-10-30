const checkAuth = (server,req) => {
    console.log('ldfjdklsjfkljkls',req.session);
    if(req.session.isAuth === true){
        server.locals.checkIsAuth = true;
    }else{
        server.locals.checkIsAuth = false;
    }
}

module.exports = ()=> checkAuth;