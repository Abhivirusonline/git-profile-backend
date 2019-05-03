var express = require('express');
var router = express.Router();
const {getUser,validateSession}=require('../services/user-services');
/* POST users listing. */
router.post('/', (req, res, next)=>{
  getUser(req.body)
      .then(result=>{
        res.send(result);
      })
      .catch(err=>{
        console.log("error occoured in fetching :"+err);
      });
});
router.post('/validate',validateSession,(req,res,next)=>{
    if(req.body.isAuth){
        res.send("Session is valid");
    }
    else
    {
        res.send("Session is not valid");
    }
})
router.get('/',(req,res,next)=>{
    res.send("Try Using our website");
})

module.exports = router;