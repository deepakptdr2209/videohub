import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/NavSlice'
import { SUGGESTION_API } from '../utils/Constants';
import { FaSearch } from 'react-icons/fa';
import { catchResult } from '../utils/SearchSlice';

const Head = ()=> {
   //---- for search suggestion through api-----
    const [searchQuery , setSearchQuery] = useState("");
    const [suggestion, setSuggestion] = useState([]); 
    const [showSuggestion, setShowSuggestion] = useState(false);
    const searchCache = useSelector(store =>store.search);
    const dispatch = useDispatch();
    useEffect(()=>{
        const timer = setTimeout(()=>{
          if(searchCache[searchQuery]){
            setSuggestion(searchCache[searchQuery])
          }
          else{
            getSuggestion();
          }
        },200);
        return() =>{
            clearTimeout(timer)
        };
     },[searchQuery]);

     const getSuggestion = async () => {
        try {
          const response = await fetch(`/api/complete/search?client=firefox&ds=yt&q=${searchQuery}`);
          const json = await response.json();
          setSuggestion(json[1]);
 //update cache 👇
          dispatch(catchResult({
            [searchQuery] : json[1]
          }));
        } catch (error) {
          console.error('Error fetching suggestions:', error);
        }
      };
      
      

  //--- for sidebar toggle -------------
   
    const toggleHandler=()=>{
        dispatch(toggleMenu());
    }
    
    return (
        <>
        <div className= 'fixed top-0 left-0 right-0 bg-white z-50 grid grid-flow-col p-2 shadow-lg'>
        <div className='col-span-1 flex'>
    
    
            <img
             onClick={()=>toggleHandler()}
             className='h-8  mx-2 cursor-pointer'
             src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png" alt="menu logo" />
            <img
             className='h-8  mx-2 cursor-pointer'
             src="https://logolook.net/wp-content/uploads/2021/06/Youtube-Logo.png" alt="youtube logo" />
          
        </div>
        <div className='col-span-10 px-5'>
         <div className='flex item-center'>
         <input className='rounded-l-full w-1/2 border border-gray-400 p-2 pl-5 h-full '
           placeholder='search'
           type="text"
           value={searchQuery}
           onChange={(e)=>setSearchQuery(e.target.value)}
           onFocus={()=>setShowSuggestion(true)}
           onBlur={()=>setShowSuggestion(false)}
           />
          <button className='rounded-r-full border border-l-0 border-gray-400 p-[.645rem] h-full'>
           <FaSearch />
          </button>    
         </div> 
        
        { showSuggestion &&( <div className='absolute bg-white w-[30.5rem] rounded-lg shadow-lg mt-2'>
            <ul>
               {suggestion.map((s)=>(
                <li className='flex items-center py-2 px-5 hover:bg-gray-400' key={s}>
                  <FaSearch className='mr-2'/>
                   {s}</li> )
               )}  
            </ul>
        </div>)}
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