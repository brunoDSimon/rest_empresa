const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

module.exports = (req, res, next) =>{
    const authHeaders = req.headers.authorization;
    // console.log(authConfig, 'auth')
    if(!authHeaders){
        return res.status(401).send({error:'Token invalid 1'});
    }

    const parts = authHeaders.split(' ');
    // console.log(parts, 'pats')
    if(!(parts.length === 2)){
        return res.status(401).send({error:'Token Error 2'});

    }

    const [ scheme, token] = parts;

    if(!/Bearer$/i.test(scheme)){
        return res.status(401).send({error:'Token token formated 3'});
    }

    jwt.verify(token, authConfig.secret, (err, decoded)=>{
        if(err){
            return res.status(401).send({err:'Token expired'});
        }
        req.userId = decoded.id
        return next();
    });
};