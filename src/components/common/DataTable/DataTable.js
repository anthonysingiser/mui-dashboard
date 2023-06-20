import React from 'react'
import { DataGrid } from '@mui/x-data-grid'

const DataTable = ({ 
    rows, 
    columns 
}) => {
    
    return (
        <div>
            <DataGrid 
                rows={rows}
                columns={columns}
            />
        </div>
    )
} 

export default DataTable