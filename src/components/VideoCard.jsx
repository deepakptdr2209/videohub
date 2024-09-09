import React from 'react'

function VideoCard({info}) {
 
  
   
   
   const {snippet,statistics} = info;
   const {thumbnails,title,channelTitle, publishedAt} = snippet;
   
    return (
        <>
       <div className='m-2 p-2 shadow-lg w-72'>
        <img className='rounded-none hover:rounded-lg' src={thumbnails.medium.url} alt="video" />
        <ul>
            <li className='font-semibold'>{title}</li>
            <li>{channelTitle} </li>
            <li>{statistics.viewCount} views</li>
        </ul>
       </div>  
        </>
    )
}

export default VideoCard
