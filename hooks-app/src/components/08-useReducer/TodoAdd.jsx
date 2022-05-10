import React from 'react'
import { useForm } from '../../hooks/useForm'

export const TodoAdd = ({ handleAddTodo }) => {

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        if( description.trim().length <= 1){
            return
        }

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo( newTodo )
        reset()
    }

    return (
        <>
            <h4>Agregar TODOS</h4>
            <hr />

            <form 
                className='d-grid grap-2'
                onSubmit={ handleSubmit }
            >
                <input 
                    autoComplete='off'
                    className='form-control'
                    name='description'
                    onChange={ handleInputChange }
                    placeholder='Aprender...'
                    type='text'
                    value={ description }
                />
                <button
                    className='btn btn-outline-primary mt-3'
                    type='submit'
                >
                    Agregar
                </button>
            </form>
        </>
    )
}
