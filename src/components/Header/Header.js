import React from "react"
import CommonButton from "../common/CommonButton/CommonButton"
import NotificationBell from "../common/Notifications/NotificationBell"
import { Avatar } from "@mui/material"
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip'
import HelpIcon from '@mui/icons-material/Help';

const Header = () => {
    const title = 'auth'
    return (
      <div>
        <CommonButton
            variant="default"
        >
            Go to docs
        </CommonButton>
        <NotificationBell 
            iconColor='primary'
        />
        <Avatar 
            src="https://mui.com/static/images/avatar/1.jpg"
        />
        <div>
            <Typography>{title}</Typography>
            <CommonButton 
                variant='outlined'
            >
            Web Setup
            </CommonButton>
            <Tooltip
                title="Help" 
            >
                <IconButton>
                    <HelpIcon/>
                </IconButton>
            </Tooltip>
        </div>
      </div>
    )
}

export default Header