import React from 'react'

const MainContent = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen gap-5 '  >
        <h1 className='text-3xl' >
            Welcome to Old Book Store
        </h1>
        <p>
            Here You Can buy and Sell Old books
        </p>
        <div className='flex flex-row gap-4 items-center' >
          <button className='pl-5 pr-5 pt-2 pb-2 border-1 border-black w-auto rounded-md hover:bg-gray-300 ' >
            Login
          </button>
          <button className='pl-5 pr-5 pt-2 pb-2 border-1 border-black w-auto rounded-md hover:bg-gray-300  ' >
            Signup
          </button>
        </div>
    </div>
  )
}

export default MainContent