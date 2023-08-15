import React, {useState, useEffect} from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, TextField} from '@mui/material';
import { IconButton } from '@mui/joy';
import { Close } from '@mui/icons-material';

export default function Form ({postComment, handleName, handleEmail, handleComment}) {
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
            <Dialog open={openModal} onClose={closeModal} fullWidth maxWidth='md' onSubmit={(e) => postComment(e)}>
                <DialogTitle>What Do You Think? <IconButton style={{float: 'right'}}><Close onClick={closeModal}></Close></IconButton></DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please use this form to provide your feedback.
                    </DialogContentText>
                    <Stack spacing={2} margin={2}>
                        <TextField variant='outlined' label='Name' onChange={(e) => handleName(e.target.value)}></TextField>
                        <TextField variant='outlined' label='Email' onChange={(e) => handleEmail(e.target.value)}></TextField>
                        <TextField id='outlined-multiline-flexible' label='Please enter your feedback here.' multiline minRows={5} onChange={(e) => handleComment(e.target.value)}></TextField>
                        <Button color='primary' variant='contained' type='submit' >SUBMIT</Button>
                    </Stack>
                </DialogContent>
                <DialogActions></DialogActions>
            </Dialog>
        </div>
    );
};