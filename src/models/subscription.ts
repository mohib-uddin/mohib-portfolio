const mongoose=require('mongoose');
const SubscriptionSchema=new mongoose.Schema({
    email:String,
    date:Date
})
module.exports=mongoose.models.SubscriptionModel??mongoose.model("SubscriptionModel",SubscriptionSchema)
