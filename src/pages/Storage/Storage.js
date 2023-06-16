import React, { useState } from 'react'
import GridWrapper from '../../components/common/GridWrapper/GridWrapper'
import BasicSnackbar from '../../components/common/BasicSnackbar/BasicSnackbar'
import CommonButton from '../../components/common/CommonButton/CommonButton'

const Storage = () => {
    const [open, setOpen] = useState(false);
  
    const onClick = () => {
      setOpen(true);
    };
  
    const onClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };

    const message = "This is a success message!"

    return (
        <GridWrapper>
        <CommonButton 
            variant="contained" 
            onClick={onClick}
        >
          Open success snackbar
        </CommonButton> 
            <BasicSnackbar
                open={open}
                severity="success"
                onClose={onClose}
                message={message}
            />
        </GridWrapper>
    )
}

export default Storage