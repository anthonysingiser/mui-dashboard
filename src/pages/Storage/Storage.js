import React, { useEffect, useState } from 'react'
import GridWrapper from '../../components/common/GridWrapper/GridWrapper'
import BasicSnackbar from '../../components/common/BasicSnackbar/BasicSnackbar'
import UserTable from '../../components/UserTable/UserTable'
import BasicCard from '../../components/common/BasicCard/BasicCard' 

const Storage = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true)

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };

    const message = "This is a success message!"

    return (
        <GridWrapper>
          <BasicCard
            content={<UserTable onError={() => setOpen(true)}/>}
          />
          <BasicSnackbar
            open={open}
            severity="error"
            message="Data can not be fetched"
            onClose={handleClose}
            onClick={handleClick}
          />
        </GridWrapper>
    )
}

export default Storage