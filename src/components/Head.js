import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();
  const searchCache = useSelector(store => store.search);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        searchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    }

  }, [searchQuery]);

  const searchSuggestions = async () => {
    console.log("API Call " + searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    //console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery]: json[1]
    }))
  }

  const handleToggleMenu = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-flow-col shadow-lg p-5 m-2'>
        <div className='flex col-span-1'>
            <img onClick={handleToggleMenu} className='h-12' src="https://www.svgrepo.com/show/506800/burger-menu.svg" alt="menu-icon" />
            <img className='h-12' src="https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg?w=414" alt="youtube-icon" />
        </div>
        <div className='col-span-10 px-20'>
          <div>
            <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className='border border-gray-400 p-2 w-1/2 rounded-l-full outline-none' type="text" placeholder='Search' />
            <button className='border border-gray-400 p-2  rounded-r-full'>🔍</button>
          </div>
          {suggestions.length > 0 && <div className='fixed bg-white p-2 w-1/3 shadow-lg rounded-lg border border-gray-300'>
            <ul className=''>
              { suggestions.map(s => <li key={s} className='shadow-sm p-2 hover:bg-gray-400'>🔍 {s}</li>) }
              
            </ul>
          </div>}
        </div>
        <div className='col-span-1'>
            <img className='h-12' src="https://static.vecteezy.com/system/resources/thumbnails/002/318/271/small/user-profile-icon-free-vector.jpg" alt="user-icon" />
        </div>
    </div>
  )
}

export default Head;