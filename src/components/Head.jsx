import React from 'react'

const Head = ()=> {
    return (
        <>
        <div className= ' grid grid-flow-col p-2 m-2 shadow-lg'>
        <div className='col-span-1 flex'>
    
            <img
            className='h-8 cursor-pointer'
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png" alt="navbar logo" />
        
            <img
             className='h-8  mx-2 cursor-pointer'
             src="https://logolook.net/wp-content/uploads/2021/06/Youtube-Logo.png" alt="youtube logo" />
          
        </div>
        <div className='col-span-10 px-10'>
          <input className='rounded-l-full w-1/2 border border-gray-400 p-2 ' type="text" />
          <button className='rounded-r-full border border-gray-400 py-2 px-5'>🔍</button>  
        </div>
        <div className='col-span-1'>
           <img
            className='h-8'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxw0eitGgbS6Y3kJODK5lGbWxUV8sONkQUZg&s" alt="profile" />   
        </div>
        </div>
        </>
    )
}
export default Head;