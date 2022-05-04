import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'
import './hooks.css'

export const MultipleCustomHooks = () => {

    const { counter, increment, decrement } = useCounter()
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`)
    const { author, quote } = (!!data && data.length > 0 ) && data[0];

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {
                loading ?
                (
                    <div className='alert alert-info text-center'>
                        Loading...
                    </div>
                ) : (
                    <blockquote className='blockquote text-end'>
                        <p className='mb-1'>{ quote }</p>
                        <footer className='blockquote-footer'>{ author }</footer>
                    </blockquote>
                )
            }

            {
                counter > 1 ?
                (<button 
                    className='btn btn-primary me-4'
                    onClick={ decrement }
                >Previous quote</button>) 
                : ''   
            }    

            <button 
                className='btn btn-primary'
                onClick={ increment }
            >Next quote</button>    

        </div>
    )
}
