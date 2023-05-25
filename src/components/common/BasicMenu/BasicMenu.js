import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem, { menuItemClasses } from '@mui/material/MenuItem';


const BasicMenu = ({ anchorEl, handleClose, open }) => {

return(
    <div>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
        >
            {menuItemClasses.map((item) => (
                <MenuItem 
                    onClick={handleClose}
                >
                    {item.label}
                </MenuItem>
            ))}
        </Menu>
    </div>
    )
}

export default BasicMenu