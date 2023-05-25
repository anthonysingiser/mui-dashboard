import React from 'react'
import Grid from '@mui/material/Grid'
import NotificationBell from '../../components/common/Notifications/NotificationBell'


const Authentication = () => {
    return (
    <Grid item xs={8}>
        This is Authentication
        <CommonButton
            variant="default"
        >
            Go to docs
        </CommonButton>
        <NotificationBell 
            iconColor='primary'
        />
    </Grid>
    )
}

export default Authentication