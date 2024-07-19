async function isLoggedIn(req,res,next){
  if(!req.cookie.token){
    req.flash("error","you need to log in");
    return res.redirect("/");
  }

  try{
    let decode = jwt.verify(re.cookies.token,process.env.JWT_KEY);
    let user = await usermodel.findOne({email:decode.email}).select("-password");
    req.user=user;
    next();
  }
  catch(err){
    req.flash("error","something went wrong");
    res.redirect("/")
  }
}

module.exports= {isLoggedIn}