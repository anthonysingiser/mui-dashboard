import React from 'react'
import { DataGrid } from '@mui/x-data-grid'

const DataTable = () => {
    const rows = [
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'Datagrid', col2: 'is Awesome'},
        { id: 3, col1: 'YO', col2: 'What up?' },
    ]
    const columns = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
    ]
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