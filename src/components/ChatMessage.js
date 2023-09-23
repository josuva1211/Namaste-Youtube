import React from 'react'

const ChatMessage = ({ name, message}) => {
  return (
    <div className='flex items-center shadow-sm px-2'>
        <img className='h-12' src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="user-icon" />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>  
    </div>

  )
}

export default ChatMessage