import connectToDb from '../../middleware/db'
connectToDb();
import Customer from '../../model/Customer'
const  openAccount = async (req, res)=>{
    if(req.method!="POST"){
        return res.json({sucess:false, msg:"This method is not allowed"})
    }

    const {name, type, gaurdian, address, phone, email, branch, branchEmail, branchCode, branchPhone, pan, balance}= JSON.parse(JSON.stringify(req.body))
    if(!name || !type || !gaurdian || !address || !phone || !email || !branch || !branchEmail || !branchPhone || !pan || !balance){
        return res.json({success:false, msg:"Please fill the required fields"})
    }
    let allCustomers = await Customer.find({});
    let account =  '0000'+(allCustomers.length+1);
    let checkCustomer = await Customer.findOne({$or:[{pan:pan}, {email:email}, {phone:phone}]});
    if(checkCustomer){
        return res.json({success:false, msg:"You already have an account with out bank"})
    }
    let customer  = await Customer.create({
        name:name, account:account, type:type,  gaurdian:gaurdian, address:address, phone:phone, email:email, branch:branch, branchEmail:branchEmail, branchCode:branchCode, branchPhone:branchPhone,openingDate:new Date(), pan:pan, balance:balance
    })
    if(customer){
        return res.json({success:true, msg:"Account Created Successfully"})
    }
    return res.json({success:false, msg:"Account creation failed"})
}
export default openAccount;