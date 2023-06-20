import React from 'react'
import DataTable from '../common/DataTable/DataTable'
import { useEffect, useState } from 'react'

const columns = [
    { field: 'id', headerName: 'User ID', width: 150 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'username', headerName: 'User Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 150 },
]

const UserTable = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(json => setUsers(json))
    }, [])

    return (
        <div>
            <DataTable 
                rows={users}
                columns={columns}
            />
        </div>
    )
}

export default UserTable