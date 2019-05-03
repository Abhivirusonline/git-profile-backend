const fetch = require('node-fetch');
const url =require('./url');
const credentials=require('./credentials');
const getUser=(username)=>{
    let uname=username.username;
    return fetch(url+uname)
        .then(res=>res.json())

    .catch(err=>{
        console.info("error occurred in fetching :"+err);
    })
}
const validateSession=(req,res,next)=>{
    let uname=req.body.username;
    let upass=req.body.password;
    console.log("printing req body",req.body)
    if(uname===credentials.username && upass===credentials.password)
    {
        req.body.isAuth=true;
        next();
    }
    else
    {
        req.body.isAuth=false;
        next();
    }
}

module.exports={
    getUser,
    validateSession
}