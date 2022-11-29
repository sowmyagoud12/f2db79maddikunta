const mongoose = require("mongoose") 
const televisionSchema = mongoose.Schema({ 
 tele_name: {type: String,required: [true, 'Name of the Television cannot be empty']}, 
 size: {type: String,required: [true, 'Size of the Television cannot be empty']}, 
 cost: {type: Number,required: [true, 'Cost of the Television cannot be empty']} 
}) 
 
module.exports = mongoose.model("television", 
televisionSchema)