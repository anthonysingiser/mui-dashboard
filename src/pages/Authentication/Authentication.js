import React from 'react'
import Grid from '@mui/material/Grid'
import NotificationBell from '../../components/common/Notifications/NotificationBell'
import BasicMenu from '../../components/common/BasicMenu/BasicMenu'

const Authentication = () => {
    return (
    <Grid item xs={8}>
        <NotificationBell 
            iconColor='primary'
            badgeContent={0} 
        />
        <BasicMenu/>
    </Grid>
    )
}

export default Authentication