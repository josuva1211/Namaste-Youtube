import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col shadow-lg p-5 m-2'>
        <div className='flex col-span-1'>
            <img onClick={handleToggleMenu} className='h-12' src="https://www.svgrepo.com/show/506800/burger-menu.svg" alt="menu-icon" />
            <img className='h-12' src="https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg?w=414" alt="youtube-icon" />
        </div>
        <div className='col-span-10 text-center'>
            <input className='border border-gray-400 p-2 w-1/2 rounded-l-full outline-none' type="text" placeholder='Search' />
            <button className='border border-gray-400 p-2  rounded-r-full'>🔍</button>
        </div>
        <div className='col-span-1'>
            <img className='h-12' src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="user-icon" />
        </div>
    </div>
  )
}

export default Head;