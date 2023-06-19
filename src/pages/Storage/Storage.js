import React, { useEffect, useState } from 'react'
import GridWrapper from '../../components/common/GridWrapper/GridWrapper'
import BasicSnackbar from '../../components/common/BasicSnackbar/BasicSnackbar'
import CommonButton from '../../components/common/CommonButton/CommonButton'
import Loading from '../../components/common/Loading/Loading'

const Storage = () => {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true)

    const onClick = () => {
      setOpen(true);
    };
  
    const onClose = (reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };

    useEffect(() => {
      const timer = setTimeout(() => {
        setLoading(false)
      }, 3000)
      return () => clearTimeout(timer)
    }, [])

    const message = "This is a success message!"

    return (
        <GridWrapper>
          {loading ?
            <Loading>
            <CommonButton 
                variant="contained" 
                onClick={onClick}
            >
            </CommonButton>
            </Loading>
            :
            <CommonButton 
            variant="contained" 
            onClick={onClick}
            >
              Open success snackbar
            </CommonButton>
          } 
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