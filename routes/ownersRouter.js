const express = require("express");
const router = express.Router();

const ownermodel = require("../models/owner-model")

router.get("/",function(req,res){
  res.send("hello");
})
console.log(process.env.NODE_ENV);


if(process.env.NODE_ENV==="development"){
  router.post("/create",async function(req,res){
    let owners = await ownermodel.find();

    if(owners.length==1) {
      return res.send("You dont permisson to create a new owner")
      
    }

    let {fullname,email,password} =req.body;
    let createowner=await ownermodel.create({
      fullname,
      email,
      password,
    })
    res.send(createowner)
  })
}


module.exports = router;