import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { modalStyles } from './modalStyles'
import CommonButton from '../CommonButton/CommonButton'

const BasicModal = ({ open, onClose, title, subTitle, content }) => {
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
                        {title}
                    </Typography>
                    <Typography 
                        id="modal-modal-description" 
                        sx={{ mt: 2 }}
                    >
                        {subTitle}
                    </Typography>
                    {content}
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