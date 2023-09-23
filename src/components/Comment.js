import React from 'react'

const Comment = ({comment}) => {
  
  const {name, text, replies } = comment;
  return (
    <div className='flex'>
        <img className='w-12 h-12' src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="user-icon" />
        <div className='bg-gray-300 p-2 m-2 w-1/2'>
            <h1 className='font-bold'>{name}</h1>
            <h1>{text}</h1>
        </div>
    </div>
  )
}

export default Comment