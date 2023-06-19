import React from 'react'
import { Skeleton } from '@mui/material'

const Loading = () => {
    return (
        <>
            <Skeleton
                variant='rounded'
                animation='wave'
            />
        </>
    )
}

export default Loading 