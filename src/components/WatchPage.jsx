import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/NavSlice';
import { useSearchParams } from 'react-router-dom';

function WatchPage() {
   const [searchParams] = useSearchParams();
   console.log(searchParams.get('v'));
   
    const dispatch = useDispatch();
 
    useEffect(()=>{
        dispatch(closeMenu())
    },[])
    return (
        <div className='flex mt-8 pt-8'>
            <div className='p-2 m-2 shadow-lg rounded-lg'> 
            <iframe 
            width="900" 
            height="450" 
            src={"https://www.youtube.com/embed/" + searchParams.get('v') }
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
            </iframe>
                <h1>channeldes</h1>
                <h1>comments</h1>
            </div>
            <div className='p-2 m-2 shadow-lg rounded-lg'>
                <h1>recommendeVideo</h1>
            </div>

        </div>
    )
}

export default WatchPage
/**  watchpage contains :-
 *     videoPlayer
 *     videoDes
 *     comments
 *     recommendeVideo
 */