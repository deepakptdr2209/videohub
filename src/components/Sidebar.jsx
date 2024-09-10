import React from 'react'
import { useSelector } from 'react-redux'
import appStore from '../utils/AppStore'
import { Link } from 'react-router-dom';

function Sidebar() {
    const isMenuOpen = useSelector(store=>store.app.isMenuOpen);

    // early return 
    if(!isMenuOpen)return null;
    return (
        <>
        
        <div className='shadow-xl mt-8 pt-8 mx-2 px-2 w-56 '>
          <ul className='p-2 m-2 cursor-pointer'>
            <li className='hover:bg-gray-500'><Link to="/">Home</Link></li>
            <li className='hover:bg-gray-500'>Shorts</li>
            <li className='hover:bg-gray-500'>Music</li>
          </ul>
          
          <h1 className='font-bold'>You</h1>
          <ul className='p-2 m-2 cursor-pointer'>
           <li className='hover:bg-gray-500'>Your channel</li>
           <li className='hover:bg-gray-500'>History</li> 
           <li className='hover:bg-gray-500'>Playlists</li> 
           <li className='hover:bg-gray-500'>Your videos</li>
           <li className='hover:bg-gray-500'>Watch later</li>
           <li className='hover:bg-gray-500'>Liked videos</li>
          </ul> 
          <h1 className='font-bold'>Subscribtion</h1>
          <ul className='p-2 m-2 cursor-pointer'>
           <li className='hover:bg-gray-500'>Code Monk</li>
           <li className='hover:bg-gray-500'>100Xdevs</li> 
           <li className='hover:bg-gray-500'>Aaj tak</li> 
           <li className='hover:bg-gray-500'>Narendra modi</li>
           <li className='hover:bg-gray-500'>Tseries</li>
           <li className='hover:bg-gray-500'>MIT</li>
          </ul>   
        </div>
        </>
 
    )
}

export default Sidebar
