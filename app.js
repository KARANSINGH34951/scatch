const express = require('express')
const cookieparser=require("cookie-parser")
require("dotenv").config();
const flash= require("connect-flash")
const expressSession= require("express-session")
const db=require("./config/mongoose-connection")

const indexRouter= require("./routes/indexRouter")
const ownersRouter = require("./routes/ownersRouter")
const usersRouter = require("./routes/userRouter")
const productsRouter = require("./routes/productsRouter")

const app = express()
const port = 3000

app.use(flash())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(
  expressSession({
    resave:false,
    saveUninitialized:false,
    secret:process.env.EXPRESS_SESSION_SECRET
  })
)

app.set("view engine","ejs");

app.use("/",indexRouter)
app.use("/owners",ownersRouter);
app.use("/users",usersRouter);
app.use("/products",productsRouter);


app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// usermodel
//   fullname - string
//   email- string
//   password- string
//   cart- array 
//   isadmin-boolean 
//   orders - array 
//   contact - number 
//   picture - 

// product 
//   Image
//   name
//   price 
//   discount 
//   bgcolor 
//   panelcolor 


