import React from "react";
import Head from "next/head";
import Customer from '../model/Customer'
import Link from "next/link";
import Navbar from "../components/Navbar";
import mongoose from "mongoose";
const AllCustomers = ({ customers, msg }) => {
    return (
        <>
            <Head></Head>
            <Navbar />
            <div className="w-full flex justify-center items-center">
                <h2 className="text-xl font-semibold font-[helvetica] my-2">
                    Select And View Customer
                </h2>
            </div>
            <div className="w-full flex-justify-center items-center p-2">
                <div className="overflow-x-auto relative shadow-md sm:rounded-lg ">
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="py-3 md:px-6 px-1">
                                    Customer Name
                                </th>
                                <th scope="col" className="py-3 md:px-6 px-1">
                                    Account No
                                </th>
                                <th scope="col" className="py-3 md:px-6 px-1">
                                    Available Balance
                                </th>
                                <th scope="col" className="py-3 md:px-6 px-1">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                customers && customers.length >= 1 && customers.map((customer, index) => {
                                    return (
                                            <tr key={index} className={`${(index%2==0?'bg-white':'bg-gray-50')} border-b dark:bg-gray-900 dark:border-gray-700`}>
                                                <td scope="row" className="py-4 md:px-6 px-1 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    {customer.name}
                                                </td>
                                                <td className="py-4 md:px-6 px-1">
                                                    {customer.account}
                                                </td>
                                                <td className="py-4 md:px-6 px-1">
                                                    {customer.balance} Rs
                                                </td>
                                                <td className="py-4 md:px-6 px-1">
                                                    <Link href={`/customer/${customer.account}`}><a  className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Select</a></Link>
                                                </td>
                                            </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};
export async function getServerSideProps(context) {
    let db = await mongoose.connect(`${process.env.mongodb}`);
    let customers = await Customer.find({});
    if (customers.length < 1) {
        return ({
            props: {
                customers: {},
                msg: "No customer found"
            }
        })
    }
    return ({
        props: {
            customers: JSON.parse(JSON.stringify(customers)),
            msg: ""
        }
    })

}
export default AllCustomers;
