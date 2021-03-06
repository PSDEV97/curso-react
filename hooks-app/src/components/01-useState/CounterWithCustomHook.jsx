import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import './counter.css'

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(100);


    return (
        <>
            <h1>Counter With Hook: { state }</h1>
            <hr />

            <button 
                className='btn btn-primary me-2'
                onClick={ () => increment(3) }
            >+1</button>
            <button 
                className='btn btn-primary me-2'
                onClick={ reset }
            >Reset</button>
            <button 
                className='btn btn-primary'
                onClick={ () => decrement(3) }
            >-1</button>
        </>
    )
}
