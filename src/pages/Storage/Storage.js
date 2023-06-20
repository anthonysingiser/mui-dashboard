import React, { useEffect, useState } from 'react'
import GridWrapper from '../../components/common/GridWrapper/GridWrapper'
import BasicSnackbar from '../../components/common/BasicSnackbar/BasicSnackbar'
import UserTable from '../../components/UserTable/UserTable'


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
          <UserTable/>
        </GridWrapper>
    )
}

export default Storage