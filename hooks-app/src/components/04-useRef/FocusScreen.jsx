import React, { useRef } from 'react'
import './focusScreen.css'

export const FocusScreen = () => {

  const inputRef = useRef();
  
  const handleClick = () => {
    //document.querySelector('input').focus()
    inputRef.current.select()
    console.log( inputRef );
  }

  return (
    <div>
        <h1>Focus Screen</h1>
        <hr />

        <input 
          ref={ inputRef }
          type="text" 
          className="form-control" 
          placeholder='Su nombre'
        />

        <button
          className='btn btn-primary mt-3'
          onClick={ handleClick }
        >Focus</button>
    </div>

    
  )
}
