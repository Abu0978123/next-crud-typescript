import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'

export const AddTask = () => {
  return (
    <div className='flex'>
      <button
        // onClick={() => setModalOpen(true)}
        className='btn btn-primary w-full bg-red-300'
      >
        Add new task <AiOutlinePlus className='ml-2' size={18} /> 
      </button>
    </div>
  )
}
