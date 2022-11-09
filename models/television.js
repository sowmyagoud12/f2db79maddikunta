const mongoose = require("mongoose") 
const televisionSchema = mongoose.Schema({ 
 tele_name: String, 
 size: String, 
 cost: Number 
}) 
 
module.exports = mongoose.model("television", 
televisionSchema)