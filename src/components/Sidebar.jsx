import React from 'react'

function Sidebar() {
    return (
        <>
        <div className='shadow-xl m-2 p-2 w-48 '>
          <ul className='p-1 m-1 cursor-pointer'>
            <li className='hover:bg-gray-500'>Home</li>
            <li className='hover:bg-gray-500'>Shorts</li>
            <li className='hover:bg-gray-500'>Music</li>
          </ul>
          
          <h1 className='font-bold'>You</h1>
          <ul className='p-1 m-1 cursor-pointer'>
           <li className='hover:bg-gray-500'>Your channel</li>
           <li className='hover:bg-gray-500'>History</li> 
           <li className='hover:bg-gray-500'>Playlists</li> 
           <li className='hover:bg-gray-500'>Your videos</li>
           <li className='hover:bg-gray-500'>Watch later</li>
           <li className='hover:bg-gray-500'>Liked videos</li>
          </ul> 
          <h1 className='font-bold'>Subscribtion</h1>
          <ul className='p-1 m-1 cursor-pointer'>
           <li className='hover:bg-gray-500'>Code Monk</li>
           <li className='hover:bg-gray-500'>100Xdevs</li> 
           <li className='hover:bg-gray-500'>Aaj tak</li> 
           <li className='hover:bg-gray-500'>Narendra modi</li>
           <li className='hover:bg-gray-500'>Tseries</li>
           <li className='hover:bg-gray-500'>MIT</li>
          </ul>   
        </div></>
    )
}

export default Sidebar
