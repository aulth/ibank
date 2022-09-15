import React from 'react'
import Navbar from '../components/Navbar'

const PrivacyPolicy = () => {
    return (
        <div className="conatainer m-auto">
            <Navbar />
            <div className="m-auto p-2">
                <h2 className="text-xl font-semibold">Privacy Policy</h2>
                <p>
                    iBank recognizes the expectations of its
                    customers with regard to privacy,
                    confidentiality and security of their
                    personal information that resides with
                    the Bank. Keeping personal information
                    of customers secure and using it solely
                    for activities related to the Bank and
                    preventing any misuse thereof is a top
                    priority of the Bank. The Bank has adopted
                    the privacy policy aimed at protecting the
                    personal information entrusted and disclosed
                    by the customers.
                    This policy governs the way in which the Bank
                    collects, uses, discloses, stores, secures
                    and disposes of personal information and sensitive personal data or information.
                </p>
                <h2 className="font-semibold mt-2">Definitions:</h2>
                <p>
                    Personal information means any information that relates to a natural person, which either directly or indirectly, in combination with other information available or likely to be available with the Bank, is capable of identifying such person.
                    Sensitive personal data or information of a person means such personal information which consists of information relating to:
                    <ul className='list-disc list-inside'>
                        <li>password</li>
                        <li>financial information such as Bank account or credit card or debit card or other payment instrument details</li>
                        <li>physical, physiological and mental health condition</li>
                        <li>sexual orientation</li>
                        <li>medical records and history</li>
                        <li>any of the information received under above clauses by body corporate for processing, stored or processed under lawful contract or otherwise. Provided that, any information that is freely available or accessible in public domain or furnished under the right to information act, 2005 or any other law for the time being in force shall not be regarded as sensitive personal data or information for the purposes of this policy</li>
                    </ul>
                </p>
                <h2 className="font-semibold mt-2">Effective Date:</h2>
                <p>13/09/2022</p>

            </div>
        </div>
    )
}

export default PrivacyPolicy