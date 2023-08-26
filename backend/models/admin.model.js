const mongoose=require("mongoose")

const adminSchema=mongoose.Schema({
    name:String,
    email:String,
    phone:Number,
    password:String
},{
    
    versionKey:false
})

const AdminModel=mongoose.model("adminuser", adminSchema)

module.exports={
    AdminModel
}