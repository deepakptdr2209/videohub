import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/NavSlice'
import { SUGGESTION_API } from '../utils/Constants';

const Head = ()=> {
   //---- for search suggestion through api-----
    const [searchQuery , setSearchQuery] = useState("");
    const [suggestion, setSuggestion] = useState([]); 
    useEffect(()=>{
        const timer = setTimeout(()=> getSuggestion(),200);
        return() =>{
            clearTimeout(timer)
        };
     },[searchQuery]);

     const getSuggestion = async () => {
        try {
          const response = await fetch(`/api/complete/search?client=firefox&ds=yt&q=${searchQuery}`);
          const json = await response.json();
          setSuggestion(json[1]);
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      };
      
      

  //--- for sidebar toggle -------------
    const dispatch = useDispatch()
    const toggleHandler=()=>{
        dispatch(toggleMenu());
    }
    
    return (
        <>
        <div className= ' grid grid-flow-col p-2 m-2 shadow-lg'>
        <div className='col-span-1 flex'>
    
    
            <img
             onClick={()=>toggleHandler()}
             className='h-8  mx-2 cursor-pointer'
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png" alt="menu logo" />
            <img
             className='h-8  mx-2 cursor-pointer'
             src="https://logolook.net/wp-content/uploads/2021/06/Youtube-Logo.png" alt="youtube logo" />
          
        </div>
        <div className='col-span-10 px-10'>
         <div>
         <input className='rounded-l-full w-1/2 border border-gray-400 p-2 '
           type="text"
           value={searchQuery}
           onChange={(e)=>setSearchQuery(e.target.value)} />
          <button className='rounded-r-full border border-gray-400 py-2 px-5'>🔍</button>    
         </div> 
        
        <div className='fixed bg-white w-[29.5rem]'>
            <ul>
               {suggestion.map((s)=>(
                <li key={s}>🔍 {s}</li> 
               )
               )}
               
            </ul>
        </div>
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