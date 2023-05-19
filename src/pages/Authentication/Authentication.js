import React from 'react'
import Grid from '@mui/material/Grid'
import CommonButton from '../../components/CommonButton/CommonButton'

const Authentication = () => {
    const buttonStyles = {
        fontSize: '0.875rem',
        fontWeight: 600,
        textTransform: 'capitalize',
        borderRadius: 2.5,
        '&.MuiButton-contained': {
            backgroundColor: '#009be5',
            '&:hover': {
                backgroundColor: '#006db3',
            },
        },
        '&.MuiButton-outlined': {
            color: '#fff',
            borderColor: '#fff',
            '&:hover': {
                backgroundColor: 'transparent',
            },
        },
    }

    return (
        <Grid item xs={8}>
            This is Authentication 
            <CommonButton 
                variant= 'contained'
                size= "large"
                sx= {buttonStyles}
            > 
                Text 
            </CommonButton>
            <CommonButton
                variant='outlined'
                sx={buttonStyles}
            >
                Web setup
            </CommonButton>
            <CommonButton
                variant= 'contained'
                color={'primary'}
            >
                Primary
            </CommonButton>
        </Grid>
    )
}

export default Authentication