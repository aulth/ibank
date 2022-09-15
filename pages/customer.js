import React from "react";
import Navbar from "../components/Navbar";
import TransactionTable from "../components/TransactionTable";

const Customer = () => {
  return (
    <>
      <div className="container m-auto">
        <Navbar />
        <div className="w-full flex justify-center items-cente">
          <div className="m-auto mt-2 border rounded p-2">
            <div className="w-full flex justify-center items-cente my-2">
              <img src="/images/logo.png" alt="" className="w-[80px]" />
            </div>
            <div className="w-full grid md:grid-cols-2 grid-cols-1">
              <div className="md:pr-1">
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="w-[150px] flex items-start">
                        <b>Customer Name</b>
                      </td>
                      <td>: Mohd Usman</td>
                    </tr>
                    <tr>
                      <td className="w-[150px] flex items-start">
                        <b>Account Number</b>
                      </td>
                      <td>: 234342234</td>
                    </tr>
                    <tr>
                      <td className="w-[150px] flex items-start">
                        <b>Account Type</b>
                      </td>
                      <td>: Saving Bank Account</td>
                    </tr>
                    <tr>
                      <td className="w-[150px] flex items-start">
                        <b>S/D/W/H/o</b>
                      </td>
                      <td>: Mohd Samiullah</td>
                    </tr>
                    <tr>
                      <td className="w-[150px] flex items-start">
                        <b>Address</b>
                      </td>
                      <td>
                        : Vill. And Post Sai Buzurg, P.O. Bakhira, Distt Sant
                        Kabir Nagar
                      </td>
                    </tr>
                    <tr>
                      <td className="w-[150px] flex items-start">
                        <b>Phone </b>
                      </td>
                      <td>: 9839872992</td>
                    </tr>
                    <tr>
                      <td className="w-[150px] flex items-start">
                        <b>Email </b>
                      </td>
                      <td>: mohdusman.you@gmail.com</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="md:pl-1">
                <table className="w-full">
                  <tbody>
                    <tr>
                      <td className="w-[150px] flex items-start">
                        <b>Branch</b>
                      </td>
                      <td style={{ width: 'calc(100% - 150px)' }}>: Okhla New Delhi</td>
                    </tr>
                    <tr>
                      <td className="w-[150px] flex items-start">
                        <b>Branch Code</b>
                      </td>
                      <td>: 17003</td>
                    </tr>
                    <tr>
                      <td className="w-[150px] flex items-start">
                        <b>Email</b>
                      </td>
                      <td>: 17003@playbank.com</td>
                    </tr>
                    <tr>
                      <td className="w-[150px] flex items-start">
                        <b>Phone No</b>
                      </td>
                      <td >: 987654321</td>
                    </tr>
                    <tr>
                      <td className="w-[150px] flex items-start">
                        <b>A/C Opening Date</b>
                      </td>
                      <td>: 06/07/2021</td>
                    </tr>
                    <tr>
                      <td className="w-[150px] flex items-start">
                        <b>Customer PAN </b>
                      </td>
                      <td>: ALOPA2020G</td>
                    </tr>
                    <tr>
                      <td className="w-[150px] flex items-start">
                        <b>Available Balance </b>
                      </td>
                      <td>: 27.00 Rs</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="w-full flex justify-center items-center py-2">
              <button className="rounded px-2 mr-1 py-1 border border-[#232323] hover:bg-[rgb(19,17,17)] hover:text-white">
                Transaction History
              </button>
              <button className="rounded px-2 py-1 border border-[#232323] hover:bg-[rgb(19,17,17)] hover:text-white">
                Transfer Money
              </button>
            </div>
            <TransactionTable/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Customer;
