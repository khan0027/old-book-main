import React from 'react'

const Card = () => {
  const data = [
    { 
      Image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_VHpHi-Wm0FioGf4sJ_flWN2OqVCTkLklnA&s",
      Title: "This is title", 
      Description: "Lorem ipsum dolor sit amet...", 
      Price: "500" 
    }
  ]

  return (
    <div>
        {data.map((item, index) => {
          return (
            <div key={index} className="px-5 border-1 border-gray-400">
              <img src={item.Image} alt="Book Cover" className='hover:scale-103 transition-all w-fit duration-300'/>
              <h1>{item.Title}</h1>
              <span>${item.Price}</span>
              <p>{item.Description}</p>
            </div>
          )
        })}
    </div>
  )
}

export default Card