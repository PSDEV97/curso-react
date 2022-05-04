import React, { memo } from 'react'

export const Small = memo( ({ value }) => {

    console.log('llamando al small');

    return (
        <small>{ value }</small>
    )
})
