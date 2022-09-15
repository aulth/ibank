import React from 'react'

const TransactionTable = ({ data }) => {
    return (
        <>
            {
                data && !data.length < 1 && <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="py-3 px-6">
                                Date
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Description
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Debit
                            </th>
                            <th scope="col" className="py-3 px-6">
                                Credit
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((transaction, index)=>{
                                return <tr key={index} className={`${index%2==0?'bg-white':'bg-gray-50'} border-b dark:bg-gray-900 dark:border-gray-700`}>
                            <td scope="row" className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {transaction.createdAt}
                            </td>
                            <td className="py-4 px-6">
                                {transaction.credit?`Send to ${transaction.sender}`:`Received from ${transaction.receiver}`}
                            </td>
                            <td className="py-4 px-6">
                                {transaction.debit && transaction.balance} Rs
                            </td>
                            <td className="py-4 px-6">
                                {transaction.credit && transaction.balance} Rs
                            </td>
                        </tr>
                            })
                        }
                    </tbody>
                </table>
            }
        </>
    )
}

export default TransactionTable