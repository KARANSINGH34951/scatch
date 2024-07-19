const express = require("express");
const router = express.Router();
const {handleregister,handlelogin}=require("../controllers/authcontroller")

router.get("/",function(req,res){
  res.send("hello");
})

router.post("/register",handleregister)

router.post("/login",handlelogin)





module.exports = router;