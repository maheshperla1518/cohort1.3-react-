import React from 'react'
import { Link } from 'react-router-dom';

function Card({image,title,price,id}) {
  return (
    <Link to={`/details/${id}`}>
        <div className='w-[280px] border border-neutral-400 px-4 py-2 rounded-xl'>
        <img className='h-32 mx-auto' src={image} alt="" />
        <h1 className='mt-2 truncate'>{title}</h1>
        <div>INR: {Math.floor(price*90)}</div>
    </div>
    </Link>
  )
}

export default Card;
