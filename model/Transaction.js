import mongoose from "mongoose";
const transactionSchema = new mongoose.Schema({
    sender:String,
    receiver:String,
    balance:Number,
    senderStatus:Object,
    receiverStatus:Object,
}, {
    timestamps:true
})

mongoose.models = {}
export default mongoose.model('transaction', transactionSchema)