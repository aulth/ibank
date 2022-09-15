import React from 'react'
import mongoose from 'mongoose';
import Customer from '../../model/Customer'
import CustomerPage from '../../components/CustomerPage';
const Slug = ({customer, customers, msg}) => {
  return (
    <>
    <CustomerPage customerData={customer} customers={customers} msg={msg} />
    </>
  )
}
export async function getServerSideProps(context){
    const {slug} = context.query;
    const db = await mongoose.connect(`${process.env.mongodb}`);
    let customer = await Customer.findOne({account:slug});
    let customers = await Customer.find({});
    customers = customers.filter((item)=>(item.account!=customer.account));
    if(!customer){
        return ({
            props:{
                customer:{},
                customers:{},
                msg:"No Customer Found With This Account Number"
            }
        })
    }
    return ({
        props:{
            customer:JSON.parse(JSON.stringify(customer)),
            customers:JSON.parse(JSON.stringify(customers)),
            msg:""
        }
    })
}
export default Slug 