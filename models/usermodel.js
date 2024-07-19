
//   fullname - string
//   email- string
//   password- string
//   cart- array 
//   isadmin-boolean 
//   orders - array 
//   contact - number 
//   picture - 


const userschema= mongoose.Schema({
  fullname:String,
  email:String,
  password:String,
  cart:{
    type:Array,
    default:[]
  },
  isadmin:Boolean,
  orders:{
    type:Array,
    default:[]
  },
  contact:Number,
  picture:String
})

module.exports = mongoose.model("user",userschema)