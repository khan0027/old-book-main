import React from 'react'
import { FaBook } from "react-icons/fa6";
import { useState } from 'react';

const Navbar = () => {
    const [hovered, isHovered] = useState(false);
    const [hovered1,isHovered1] = useState(false);

    return (
        <div className='flex flex-row items-center justify-around p-4 gap-15 '>
            <div>
                <FaBook color='white' size={22} />
            </div>
            <ul className='flex flex-row items-center justify-center text-white gap-8 text-lg '>
                <li className='hover:text-blue-300' >Home</li>
                <li className='hover:text-blue-300' >About</li>
                <li className='hover:text-blue-300' >Pricing</li>
                <li className='hover:text-blue-300' >Sell Books</li>
                <li className='hover:text-blue-300' >Contact Us</li>
            </ul>
            <div className='text-white flex gap-5 rounded-md p-1 pl-2 pr-2  '>
                <button className={`bg-blue-900 w-20 p-1  rounded-md text-black transition-all duration-300 ${hovered ? 'bg-blue-900 w-20 p-1  rounded-md text-white' : 'bg-transparent text-white'}`} 
                
                onMouseEnter={() => isHovered(true)&&isHovered1(false)}
                onMouseLeave={() => isHovered(false)&&isHovered1(true)}
                
                >
                    Login
                </button>
                <button className={`w-20 transition-all duration-400 ${hovered1 ? 'bg-blue-900 text-white rounded-md p-1':'bg-transparent text-white' }`}
                
                onMouseEnter={() => isHovered1(true)&&isHovered(false)}
                onMouseLeave={() => isHovered1(false)&&isHovered(true)}
                    
                >
                    Signup
                </button>
            </div>
        </div>
    )
}

export default Navbar