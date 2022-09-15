import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center p-2 shadow-sm">
        <Link href={"/"}><img  src="/images/logo.png" className='w-[100px] cursor-pointer' alt="" /></Link>
        <ul className="flex items-center navbar-list relative">
            <Link href={"/contact"} ><li className="ml-5 font-semibold relative  cursor-pointer hover:text-blue-500 hover:under-line transition-all hover:underline">Contact</li></Link>
            <Link href={"/about"} ><li className="ml-5 font-semibold  relative cursor-pointer hover:text-blue-500 hover:under-line transition-all hover:underline">About</li></Link>
            <Link href={"/privacy-policy"} ><li className="ml-5 mr-2 font-semibold cursor-pointer hover:text-blue-500 transition-all hover:underline">Privacy</li></Link>
        </ul>
    </div>
  )
}

export default Navbar