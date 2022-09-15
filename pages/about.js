import React from 'react'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <div className="container m-auto">
       <Navbar/>
       <div className="md:w-[700px] w-full m-auto items-center p-2">
        <div className="border-b pb-2 mt-1">
        <h2 className="text-xl font-semibold">About : </h2>
          <p>iBANK a made under Web Developemt Internship Program at The Sparks Foundation.</p>
        </div>
        <div className="border-b  pb-2 mt-2">
        <h2 className="text-xl font-semibold">Flow of this web app : </h2>
        <ul>
          <li>Home Page</li>
          <li>View All Customers</li>
          <li>Select And View One Customer</li>
          <li>Transfer Money</li>
          <li>Select Customer To Transfer To</li>
          <li>View All Customers</li>
        </ul>
        </div>
       </div>
    </div>
  )
}

export default About