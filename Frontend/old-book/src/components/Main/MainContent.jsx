import React, { useState } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import Navbar from '../Navbar/Navbar';


const MainContent = () => {

  const [mouseEnter, setmouseEnter] = useState(false)

  function mouseEnterHandler(){
    setmouseEnter(!mouseEnter);
  }



  return (
    <div className='flex flex-col flex-wrap w-full justify-center items-center h-150 gap-5 '  >
        <div className='flex flex-row w-full justify-between px-10 py-1 items-center h-13 fixed top-0 left-0  backdrop-blur-md z-20' >
          <div className='hover:bg-gray-200 p-3 rounded-full ' >
            <CiMenuFries size={20} className='inline md:hidden ' />
          </div>
          <div className='w-52 hidden md:inline fixed top-0 left-0 z-50' >
            <Navbar />
          </div>
          <div className=' flex flex-col justify-center h-3/4 items-center ' 
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseEnterHandler}
          >
            <div className=' flex flex-row justify-around items-center rounded-full border-1 w-17 border-gray-500 bg-yellow-400' >
              <span>0</span>
              <CiShoppingCart size={20} />
            </div>
            {mouseEnter ? <div className='w-15 flex justify-center items-center text-black fixed top-15 h-7 rounded-md bg-gray-200  ' >
                <span>Cart</span>
            </div> : ""}
            
          </div>
        </div>
        <div>
          <h1 className='text-3xl' >
            Welcome to Old Book Store
        </h1>
        <p>
            Here You Can buy and Sell Old books
        </p>
        </div>
    </div>
  )
}

export default MainContent