import React, { useEffect, useState } from 'react'
import { YOUTUBE_API } from '../utils/Constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

function VideoContainer() {
    const [videos ,setVideos] = useState([]);
    useEffect(()=>{
        getvideos();
    },[])
    const getvideos = async ()=>{
       const data = await fetch(YOUTUBE_API)
       const json = await data.json();
       setVideos(json.items);
    
    }
    return (
        <>
        <div className=' flex flex-wrap'>
        {videos.map(video =>
           <Link to = {"/watch?v=" + video.id} key ={video.id}>
           <VideoCard  info ={video} />
           </Link> 
           )}
        </div>
        </>
    )
}

export default VideoContainer
