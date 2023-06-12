import React, { useState, useEffect } from "react"
import BasicModal from '../../common/BasicModal/BasicModal'
import Box from '@mui/material/Box'
import { TextField } from "@mui/material"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

const defaultInputValues = {
    userId: "",
    email: "",
    phoneNumber: "",
}


function NewUserModal({ open, onClose }) {
    const [values, setValues] = useState(defaultInputValues)
    const modalStyles = {
        inputFields: {
            display: 'flex',
            flexDirection: 'column',
            marginTop: '20px',
            marginBottom: '15px',
            '.MuiFormControl-root': {
                marginBottom: '20px',
            },
        },
    }

    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    const validationSchema = Yup.object().shape({
        userId: Yup.string()
            .required()
            .min(8, 'User ID must be at least 8 characters'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),
        phoneNumber: Yup.string()
            .matches(phoneRegExp, 'Phone number is not valid'),
    })
    const {
        register, handleSubmit, formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema)
    })

    const addUser = (data) => {
        console.log(data)
    }

    const handleChange = (value) => {
        console.log(value)
    }

    const getContent = () => {
        <Box sx={modalStyles.inputFields}>
            <TextField
                placeholder="User ID"
                name="userID"
                label="User ID"
                required
                {...register('userId')}
                onChange={(event) => handleChange({ userId: event.target.value})}
                error={errors.userId ? true : false}
                helperText={errors.userId?.message} />
            <TextField
                placeholder="Email"
                name="email"
                label="Email"
                required
                {...register('email')}
                error={errors.email ? true : false}
                helperText={errors.email?.message} />
            <TextField
                placeholder="Phone Number"
                name="phoneNumber"
                label="Phone Number"
                required
                {...register('phoneNumber')}
                error={errors.phoneNumber ? true : false}
                helperText={errors.phoneNumber?.message} />
        </Box>
    }
    return (
        <BasicModal
            open={open}
            onClose={onClose}
            title="new user"
            subTitle="fill out form and submit"
            content={getContent()}
            onSubmit={handleSubmit(addUser)}
        >

        </BasicModal>
    )
}

export default NewUserModal