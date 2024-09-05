import React from 'react'
import Buttons from './Buttons'

function ButtonList() {
    const list = ['All','Music','News','Cricket','Algorithms','Coding','Android','Comedy','Songs','Dance','Football']
    return (
        
        <div className='flex m-2'>
         {list.map((buttonLabel, index) => (
        <Buttons key={index} name={buttonLabel} />
      ))}
        </div>
    
    )
}

export default ButtonList
