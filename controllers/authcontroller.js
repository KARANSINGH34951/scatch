const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const usermodel=  require("../models/usermodel")
const {generatetoken}= require("../utilis/generatetoken.js")

async function handleregister(req,res){
  try{
    let {email,fullname,password}= req.body;

    let user= await usermodel.findOne({email})
    if(user){
      return res.send("YOU already have an account")
    }

    bcrypt.genSalt(10,function (err,salt){
      bcrypt.hash(password,salt,async function(err,hash){
        if(err) {
          return res.send(err.message)
        }
        else{
          let user = await usermodel.create({
            email,
            fullname,
            password:hash
          });

          let token=generatetoken(user)
          res.cookie("token",token)
          res.send(token)
        }
      })
    })
  }
  catch(err){
    console.log(err.message);
  }
  
}

async function handlelogin(req,res){
  let {email,password}= req.body;

  let user=await usermodel.findOne({email:email})

  if(!user){
    return res.send("Email or Passowrd incorrect")
  }

  bcrypt.compare(password,user.password,function (err,result){
    if(result){
      let token = generatetoken(user);
      res.cookie("token",token)
      res.send("You logged In Sucessfully")
    }
    else{
      return res.send("Email or Passowrd incorrect")
    }
  })
 

}

module.exports={handleregister,handlelogin}