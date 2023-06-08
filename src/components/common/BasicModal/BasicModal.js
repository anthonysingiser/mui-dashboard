import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { modalStyles } from './modalStyles'
import CommonButton from '../CommonButton/CommonButton'
import Input from '@mui/material/Input'

const BasicModal = ({ open, onClose }) => {
    const validate = () => {
    }

    return (
        <div>
            <Modal open={open} onClose={onClose}>
                <Box sx={modalStyles.wrapper}>
                    <Typography 
                        id="modal-modal-title" 
                        variant="h6" 
                        component="h2"
                    >
                        New User
                    </Typography>
                    <Typography 
                        id="modal-modal-description" 
                        sx={{ mt: 2 }}
                    >
                        Fill out form and click submit
                    </Typography>
                    <Box sx={modalStyles.inputFields}>
                        <Input placeholder="E-Mail" />
                        <Input placeholder="Phone Number" />
                        <Input placeholder= "User ID" />
                    </Box>
                </Box>
                <Box sx={modalStyles.buttons}>
                    <CommonButton
                        variant='contained'
                        onClick={validate}
                    >
                        Submit
                    </CommonButton>
                    <CommonButton onClick={onClose}>Cancel</CommonButton> 
                </Box>
            </Modal>
        </div>
    )
}

export default BasicModal