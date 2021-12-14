const jwt = require("jsonwebtoken");

const publicRoutes = ['/', '/api/auth', '/api/actor'];

const AuthMiddleware = (req, res, next) => {
  
    const { authorization } = req.headers;


    if(publicRoutes.includes(req.url) || process.env.AUTH_MIDDLEWARE_ENABLED){
        return next();
    }

    if(!authorization){
        return res.status(401).send({message: "Authorization not found"});
    }
    
    const  token = authorization.split(" ")[1];
    
    try{
        jwt.verify(token, process.env.JWT_SECRET);

        next();
    }catch(error){
        return res.status(401).send({message: "Invalid Acess Token"});       
    }
    
};
    
module.exports = AuthMiddleware; 