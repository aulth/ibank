import mongoose from "mongoose";
const customerSchema = new mongoose.Schema({
    name:String,
    account:String,
    type:String,
    gaurdian:String,
    address:String,
    phone:String,
    email:String,
    branch:String,
    branchEmail:String,
    branchCode:String,
    branchPhone:String,
    openingDate:Date,
    pan:String,
    balance:Number
})
mongoose.models ={}
export default mongoose.model("customer", customerSchema)