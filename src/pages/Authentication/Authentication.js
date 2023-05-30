import React from 'react'
import Grid from '@mui/material/Grid'
import BasicCard from '../../components/common/BasicCard/BasicCard'
import SearchBar from '../../components/common/SearchBar/SearchBar'

const Authentication = () => {
    return (
    <Grid item xs={8} sx={{ marginLeft: '320px'}}>
        <BasicCard header={<SearchBar />} />
    </Grid>
    )
}

export default Authentication