const express = require('express')
const cookieparser=require("cookie-parser")
const db=require("./config/mongoose-connection")

const ownersRouter = require("./routes/ownersRouter")
const usersRouter = require("./routes/userRouter")
const productsRouter = require("./routes/productsRouter")

const app = express()
const port = 3000

app.set("view engine","ejs");

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/",function(req,res){
  res.send("hello");
})

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


