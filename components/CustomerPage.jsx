import React, { useState } from 'react'
import Navbar from './Navbar'
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TransactionTable from './TransactionTable';
const Customer = ({ customerData, customers, msg }) => {
  const router = useRouter();
  const [transferring, setTransferring] = useState(false)
  const [transferSuccess, setTransferSuccess] = useState(false)
  const [transactionFetching, setTransactionFetching] = useState(false)
  const [transactionList, setTransactionList] = useState()
  const [transactionHistoryClicked, setTransactionHistoryClicked] = useState(false)
  const [transferMoneyClicked, setTransferMoneyClicked] = useState(false);
  const [customer, setCustomer] = useState(customerData)
  const [balance, setBalance] = useState()
  const [receiver, setReceiver] = useState()
  const [transferWindow, setTransferWindow] = useState(false)
  const triggerTM = () => {
    if (transferMoneyClicked) {
      setTransferMoneyClicked(false)
    } else {
      setTransferMoneyClicked(true)
    }
  }
  const handleOnBalance = (e) => {
    e.preventDefault();
    if (e.target.value > customer.balance) {
      setBalance(customer.balance)
      if (typeof window !== 'undefined') {
        document.getElementById("amount").style.color = 'red';
      }
    } else {
      setBalance(e.target.value)
      if (typeof window !== 'undefined') {
        document.getElementById("amount").style.color = '#232323';
      }
    }
  }
  const transferMoney = async (e) => {
    e.preventDefault();
    setTransferring(true)
    const response = await fetch("/api/transfermoney", {
      method: 'POST',
      body: JSON.stringify({ sender: customer.account, receiver: receiver.account, senderBalance: customer.balance, receiverBalance: receiver.balance, balance: balance })
    })
    const data = await response.json();
    if (data.success) {
      toast.success(data.msg)
      setTransferring(false);
      setTransferSuccess(true)
      setCustomer({ ...customer, balance: (+customer.balance - +balance) })
      setBalance(0)
    } else {
      toast.error(data.msg)
    }
  }
  const fetchTransaction = async () => {
    if(transactionHistoryClicked){
      setTransactionHistoryClicked(false)
    }else{
      setTransactionHistoryClicked(true)
      setTransactionFetching(true)
      const response = await fetch('/api/gettransaction', {
        method: "POST",
        body: JSON.stringify({ sender: customer.account })
      })
      const data = await response.json();
      if (data.success) {
        setTransactionList(data.transaction)
        setTransactionFetching(false);
      } else {
        toast.info(data.msg);
      }
    }
  }
  return (
    <>
      <ToastContainer position='top-right' />
      <div className="container m-auto">
        <Navbar />
        {
          !transferMoneyClicked && <>
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
                          <td>: {customer.name}</td>
                        </tr>
                        <tr>
                          <td className="w-[150px] flex items-start">
                            <b>Account Number</b>
                          </td>
                          <td>: {customer.account}</td>
                        </tr>
                        <tr>
                          <td className="w-[150px] flex items-start">
                            <b>Account Type</b>
                          </td>
                          <td>: {customer.type}</td>
                        </tr>
                        <tr>
                          <td className="w-[150px] flex items-start">
                            <b>S/D/W/H/o</b>
                          </td>
                          <td>: {customer.gaurdian}</td>
                        </tr>
                        <tr>
                          <td className="w-[150px] flex items-start">
                            <b>Address</b>
                          </td>
                          <td>
                            : {customer.address}
                          </td>
                        </tr>
                        <tr>
                          <td className="w-[150px] flex items-start">
                            <b>Phone </b>
                          </td>
                          <td>: {customer.phone}</td>
                        </tr>
                        <tr>
                          <td className="w-[150px] flex items-start">
                            <b>Email </b>
                          </td>
                          <td>: {customer.email}</td>
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
                          <td style={{ width: 'calc(100% - 150px)' }}>: {customer.branch}</td>
                        </tr>
                        <tr>
                          <td className="w-[150px] flex items-start">
                            <b>Branch Code</b>
                          </td>
                          <td>: {customer.branchCode}</td>
                        </tr>
                        <tr>
                          <td className="w-[150px] flex items-start">
                            <b>Email</b>
                          </td>
                          <td>: {customer.branchEmail}</td>
                        </tr>
                        <tr>
                          <td className="w-[150px] flex items-start">
                            <b>Phone No</b>
                          </td>
                          <td >: {customer.branchPhone}</td>
                        </tr>
                        <tr>
                          <td className="w-[150px] flex items-start">
                            <b>A/C Opening Date</b>
                          </td>
                          <td>: {customer.openingDate}</td>
                        </tr>
                        <tr>
                          <td className="w-[150px] flex items-start">
                            <b>Customer PAN </b>
                          </td>
                          <td>: {customer.pan}</td>
                        </tr>
                        <tr>
                          <td className="w-[150px] flex items-start">
                            <b>Available Balance </b>
                          </td>
                          <td>: {customer.balance} Rs</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="w-full flex justify-center items-center py-2">
                  <button onClick={() => { fetchTransaction() }} className="rounded px-2 mr-1 py-1 border border-[#232323] hover:bg-[rgb(19,17,17)] hover:text-white">
                    Transaction History
                  </button>
                  <button onClick={triggerTM} className="rounded px-2 py-1 border border-[#232323] hover:bg-[rgb(19,17,17)] hover:text-white">
                    Transfer Money
                  </button>
                </div>
                {
                  transactionHistoryClicked && transactionFetching &&
                    <div className='w-full flex justify-center items-center' role="status">
                      <svg aria-hidden="true" class="mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                }
                {
                  transactionHistoryClicked && !transactionFetching && <div className="mt-3">
                    {
                      transactionList && !transactionList.length<1 && <>
                      <TransactionTable customer={customer} data={transactionList} />
                      </>
                    }
                  </div>
                }
              </div>
            </div>
          </>
        }
        {
          transferMoneyClicked && !transferWindow && <>
            <div className="container m-auto mt-2 px-2">
              <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
                <h2 className="text-lg font-semibold text-center font-[helvetica] my-2 mb-3">
                  Select The Customer You Want to Transfer The Money
                </h2>
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="py-3 px-6">
                        Customer Name
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Account No
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Available Balance
                      </th>
                      <th scope="col" className="py-3 px-6">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      customers && customers.length >= 1 && customers.map((customer, index) => {
                        return (
                          <tr key={index} className={`${(index % 2 == 0 ? 'bg-white' : 'bg-gray-50')} border-b dark:bg-gray-900 dark:border-gray-700`}>
                            <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                              {customer.name}
                            </td>
                            <td className="py-4 px-6">
                              {customer.account}
                            </td>
                            <td className="py-4 px-6">
                              {customer.balance} Rs
                            </td>
                            <td className="py-4 px-6">
                              <button className="font-medium text-blue-600 dark:text-blue-500 hover:underline" onClick={() => { setReceiver(customer); setTransferWindow(true) }}>Select</button>
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
        }

      </div>
      {
        transferMoneyClicked && transferWindow && !transferring && !transferSuccess && <>
          <div className="md:w-[400px] w-full m-auto border rounded mt-3">
            {
              !transferring && <>
                <div className=" pl-6 py-2  flex items-center justify-start">
                  <h2 className="font-semibold">
                    Transfer To
                  </h2>
                </div>

                <table className="w-full">
                  <tbody>
                    <tr className={`bg-white border-b border-t dark:bg-gray-900 dark:border-gray-700`}>
                      <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Name
                      </td>
                      <td className="py-4 px-6">
                        : {receiver.name}
                      </td>
                    </tr>
                    <tr className={`bg-gray-50 border-b dark:bg-gray-900 dark:border-gray-700`}>
                      <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Account Number
                      </td>
                      <td className="py-4 px-6">
                        : {receiver.account}
                      </td>
                    </tr>
                    <tr className={`bg-white border-b dark:bg-gray-900 dark:border-gray-700`}>
                      <td scope="row" id='amount' className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Amount
                      </td>
                      <td className="flex items-center px-6">
                        {
                          customer.balance <= 0 && <>: <span className='text-red-500 py-4 font-semibold pl-1'>Zero Balance</span></>
                        }{
                          customer.balance > 0 && <>: <input type="number" value={balance} onChange={handleOnBalance} className=' pl-2 w-full py-4 border-none focus:outline-none' /></>
                        }
                      </td>
                    </tr>
                    <tr className={`bg-gray-50 dark:bg-gray-900 dark:border-gray-700`}>
                      <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        Payee
                      </td>
                      <td className="py-4 px-6">
                        : {customer.name}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </>
            }

          </div>
          <div className="w-full flex justify-center py-2">
            <button onClick={transferMoney} className={`rounded border px-2 py-1 hover:bg-[#232323] ${balance ? 'bg-[#3b3b3b]' : "hidden"} text-white`}>
              Transfer {balance && balance + " Rs"}
            </button>
          </div>
        </>
      }
      {
        transferring && !transferSuccess && <>
          <div className="container m-auto flex flex-col justify-center items-center p-5">
            <img src="/images/progress.gif" className='w-[120px]' alt="" />
            <h2 className="text-sm font-semibold mt-2">Transferring...</h2>
          </div>
        </>
      }
      {
        transferSuccess && <>
          <div className="container m-auto flex flex-col justify-center items-center p-5">
            <img src="/images/done.gif" className='w-[120px]' alt="" />
            <h2 className="text-sm font-semibold">Transfer Successfull</h2>
            <button onClick={() => { setTransferSuccess(false); setTransferMoneyClicked(false); setTransferWindow(false); router.push(`/customer/${customer.account}`) }} className={`rounded border px-2 py-1 hover:bg-[#232323] bg-[#3b3b3b] text-white mt-2`}>
              Back to User Home Page
            </button>
          </div>
        </>
      }
    </>
  )
}

export default Customer