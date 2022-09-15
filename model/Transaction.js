import mongoose from "mongoose";
const transactionSchema = new mongoose.Schema({
    sender:String,
    receiever:String,
    balance:Number,
    senderStatus:Object,
    receiverStatus:Object,
}, {
    timestamps:true
})

mongoose.models = {}
export default mongoose.model('transaction', transactionSchema)