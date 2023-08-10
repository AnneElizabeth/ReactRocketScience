import React, {useState, useEffect} from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, TextField} from '@mui/material';
import { IconButton } from '@mui/joy';
import { Close } from '@mui/icons-material';

const FormModal = () => {
    const [openModal, setOpenModal] = useState(false);
    const viewForm = () => {
        setOpenModal(true);
    }
    const closeModal = () => {
        setOpenModal(false);
    }

    return (
        <div>
            <Button onClick={viewForm} color='primary' variant='contained'>Leave Feedback</Button>
            <Dialog open={openModal} onClose={closeModal} fullWidth maxWidth='md'>
                <DialogTitle>What Do You Think? <IconButton style={{float: 'right'}}><Close onClick={closeModal}></Close></IconButton></DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please use this form to provide your feedback.
                    </DialogContentText>
                    <Stack spacing={2} margin={2}>
                        <TextField variant='outlined' label='Name'></TextField>
                        <TextField variant='outlined' label='Email'></TextField>
                        <TextField id='outlined-multiline-flexible' label='Please enter your feedback here.' multiline minRows={5}></TextField>
                        <Button color='primary' variant='contained'>SUBMIT</Button>

                    </Stack>
                </DialogContent>
                <DialogActions></DialogActions>
            </Dialog>
        </div>
    );
};
              
export default FormModal;