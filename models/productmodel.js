const { name } = require('ejs')

const productschema= mongoose.Schema({
 image: String,
 name:String,
 Price :Number,
 discount :{
  type:Number,
  default:0
 },
 bgcolor :String,
 panelcolor:String, 
 textcolors:String
})

module.exports = mongoose.model("product",productschema)