import React, { memo } from 'react'

export const TodoListItem = memo(({ todo, index, handleDelete, handleToggle }) => {

    const { id, desc, done } = todo
    
    return (
        <li
            key={ id }
            className='list-group-item'
            onClick={ () => handleToggle( id ) }
        >
            <p className={ `${ done && 'completed' }`}
            >{ index + 1 }. { desc }</p>
            <button 
                className="btn btn-danger"
                onClick={ () => handleDelete( id ) }
            >
                Borrar
            </button>
        </li>
    )
})
