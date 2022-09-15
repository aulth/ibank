import connectToDb from '../../middleware/db'
import Transaction from '../../model/Transaction'
connectToDb();
import Customer from '../../model/Customer'
const transferMoney = async (req, res)=>{
    if(req.method!=='POST'){
        return res.json({success:false, msg:"This method is not allwed"})
    }
    let {sender, receiver, balance} = JSON.parse(req.body);
    if(!sender || !receiver || !balance){
        return res.json({success:false, msg:"Fill the required field"})
    }
    let transaction = await Transaction.create({
        sender:sender,
        receiver:receiver,
        balance:balance
    })
    let senderData = await Customer.findOne({account:sender})
    let receiverData = await Customer.findOne({account:receiver});
    let senderBalance = (+senderData.balance - (+balance));
    let receiverBalance = (+receiverData.balance + (+balance));
    if(balance>senderData.balance){
        return res.json({success:false, msg:"You have insufficent balance to transfer"});
    }
    let senderCustomer = await Customer.findOneAndUpdate({account:sender}, {balance:senderBalance});
    let receiverCustomer = await Customer.findOneAndUpdate({account:receiver}, {balance:receiverBalance});
    if(transaction && senderCustomer && receiverCustomer){
        return res.json({success:true, msg:`${balance} Rs Transferred Successfully`})
    }
    return res.json({success:false, msg:"Transaction Failed"});
}

export default transferMoney