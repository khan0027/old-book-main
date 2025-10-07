import React from 'react'
import { CiMenuFries } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";

const MainContent = () => {
  return (
    <div className='flex flex-col flex-wrap w-full justify-center items-center h-150 gap-5 '  >
        <div className='flex flex-row w-full justify-between px-10 py-1 items-center h-13 fixed top-0 left-0 border-b-1 backdrop-blur-md z-20 border-gray-500' >
          <div className='hover:bg-gray-200 p-3 rounded-full' >
            <CiMenuFries size={20} />
          </div>
          <div className='w-17 flex flex-row justify-evenly h-full items-center rounded-full border-1 border-gray-500 bg-yellow-200' >
            <span>0</span>
            <CiShoppingCart size={20} />
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