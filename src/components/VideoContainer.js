import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_URL } from '../utils/constants';
import VideoCard, { VideoCardWithAd } from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_URL);
    const json = await data.json();
    //console.log(json);
    setVideos(json.items);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className='flex flex-wrap'>
      {videos.map((video,index) => (
        index % 2 === 0 ?
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard info={video} />
        </Link> : 
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCardWithAd info={video} />
        </Link>
      ))}
      
    </div>
  )
}

export default VideoContainer;