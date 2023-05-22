import React from 'react'
import Badge from '@mui/material/Badge'
import NotificationsIcon from '@mui/icons-material/Notifications'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'

const NotificationBell = ( {iconColor, badgeContent} ) => {
    const newNotifications = `You have ${badgeContent} new notifications` 
    const noNotifications = 'No new notifications'
    return (
        <Tooltip title= {badgeContent ? newNotifications : noNotifications}>
        <IconButton
            color={iconColor}
        >
        <Badge 
            badgeContent={badgeContent} 
            color="error"
        >
            <NotificationsIcon />
        </Badge>
        </IconButton>
        </Tooltip>
    )
}

export default NotificationBell