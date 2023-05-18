import React from 'react'
import Grid from '@mui/material/Grid'
import CommonButton from '../../components/CommonButton/CommonButton'
import { red } from '@mui/material/colors'

const Authentication = () => {
    const buttonStyles = {
        fontSize: 20,
        fontWeight: 700,
        backgroundColor: 'red',
        '&:hover': {
            backgroundColor: 'yellow'
        } 

    }
    return (
        <Grid item xs={8}>
            This is Authentication 
            <CommonButton 
                variant= 'outlined'
                size= "large"
                sx= {buttonStyles}
            > 
                Text 
            </CommonButton>
        </Grid>
    )
}

export default Authentication