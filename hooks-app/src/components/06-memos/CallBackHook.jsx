import React, { useCallback, useState } from 'react'
import './memorize.css'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10)

    /* const increment = () =>  {
        
    } */

    const increment = useCallback(
      (num) => {
        setCounter( c => c + num)
      },
      [ setCounter ],
    )

    return (
        <div>
            <h1>useCallBack Hook: { counter } </h1>
            <hr />

            <ShowIncrement increment={ increment }/>
        </div>
    )
}
