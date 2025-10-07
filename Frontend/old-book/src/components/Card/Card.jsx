import React from 'react'
import { CiShoppingCart } from "react-icons/ci";


const Card = () => {
  const data = [
    { 
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_VHpHi-Wm0FioGf4sJ_flWN2OqVCTkLklnA&s",
      Title: "This is Title", 
      Description: "Lorem ipsum dolor sit amet...", 
      Price: "500" 
    }
  ]

  return (
    <div>
        {data.map((item, index) => {
          return (
            <div key={index} className="flex flex-col justify-center items-start gap-y-3 border-1 bg-gray-200 rounded-md shadow-gray-300 shadow-md pb-8 overflow-hidden ">
              <img src={item.Image} alt="Book Cover" className='hover:scale-102 transition-all h-110 w-sm duration-300'/>
              <h1 className='text-2xl font-semibold px-4 ' >{item.Title}</h1>
              <span className='font-semibold text-green-800 px-4' >${item.Price}</span>
              <p className='opacity-60 px-4 ' >{item.Description}</p>
              <div className='w-11/12 mx-4 flex flex-row justify-center h-10 rounded-md hover:bg-yellow-400 transition-all duration-300 items-center gap-6 bg-yellow-300' >
                <CiShoppingCart size={24} />
                <button >Add To Cart</button>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Card