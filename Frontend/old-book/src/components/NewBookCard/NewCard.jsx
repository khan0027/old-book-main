import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const NewCard = () => {

    const [liked, setLiked] = useState(true);
    function likeHandler(){
        setLiked(!liked);
    }

  return (
    <div className='absolute h-6 border-1 border-black w-10 ' >
        <img src="https://www.shutterstock.com/image-photo/book-open-pages-close-up-600nw-2562942291.jpg" alt="Book Image" />
        <h3>
            This is Book Name
        </h3>
        <div onClick={likeHandler} >
            {liked ? <FaRegHeart color='red' size={24} /> : <FaHeart color='red' size={24} />}
        </div>
        <p>
            This is book description
        </p>
    </div>
  )
}

export default NewCard