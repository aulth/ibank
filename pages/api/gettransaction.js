import connectToDb from '../../middleware/db'
import Transaction from '../../model/Transaction'
connectToDb();
const getTransaction  = async (req, res)=>{
    if(req.method!=='POST'){
        return res.json({success:false, msg:"This method is not allowed"})
    }
    let {sender} = JSON.parse(req.body)
    if(!sender){
        return res.json({success:false, msg:"Please Provide User Account Number"})
    }
    let transaction = await Transaction.find({sender:sender});
    if(transaction.length<1){
        return res.json({success:false, msg:"No Transaction Found for user with account number " + sender});
    }
    return res.json({success:true, msg:"Transaction List Fetched", transaction});
}

export default getTransaction;