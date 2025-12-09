import React, { useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import Loader from './Loader';

function TodoCard({taskName,deleteHandler,id}) {
  let [deleteStatus,setdeleteStatus] = useState(false);
  function handledeleteClick(){
    setdeleteStatus(true);
    deleteHandler(id);
  }
  return (
    <>
    <div className='w-[400px] flex items-center justify-between px-4 py-3 rounded-xl shadow mb-2 bg-pink-50 mx-auto'>
        <p className='text-neutral-700'>{taskName}</p>
        <button onClick={handledeleteClick} className='hover:text-red-600 cursor-pointer text-neutral-500'>{deleteStatus ? <Loader/> :  <RiDeleteBin6Line /> }</button>
    </div>
    </>
  )
}
export default TodoCard;
