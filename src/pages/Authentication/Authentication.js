import React from 'react'
import Grid from '@mui/material/Grid'
import NotificationBell from '../../components/common/Notifications/NotificationBell'

const Authentication = () => {
    return (
    <Grid item xs={8}>
        <NotificationBell 
            iconColor='primary'
            badgeContent={4} 
        />
    </Grid>
    )
}

export default Authentication