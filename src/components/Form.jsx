import React, {useState, useEffect} from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Stack, TextField} from '@mui/material';
import { IconButton } from '@mui/joy';
import { Close } from '@mui/icons-material';

export default function () {
/*     const [openModal, setOpenModal] = useState(false);
    const viewForm = () => {
        setOpenModal(true);
    }
    const closeModal = () => {
        setOpenModal(false);
    }
 */
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    
    const postComment = () => {
        console.log(userName);
        console.log(email);
        console.log(comment);
    }


    return (
        <div>

{/*             <Button onClick={viewForm} color='primary' variant='contained'>Leave Feedback</Button>
            <Dialog open={openModal} onClose={closeModal} fullWidth maxWidth='md'>
                <DialogTitle>What Do You Think? <IconButton style={{float: 'right'}}><Close onClick={closeModal}></Close></IconButton></DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please use this form to provide your feedback.
                    </DialogContentText>
                    <Stack spacing={2} margin={2}>
                        <TextField variant='outlined' label='Name' onChange={(e) => setUserName(e.target.value)}></TextField>
                        <TextField variant='outlined' label='Email' on onChange={(e) => setEmail(e.target.value)}></TextField>
                        <TextField id='outlined-multiline-flexible' label='Please enter your feedback here.' multiline minRows={5} onChange={(e) => setComment(e.target.value)}></TextField>
                        <Button color='primary' variant='contained' type='submit' onClick={postComment} >SUBMIT</Button>
                    </Stack>
                </DialogContent>
                <DialogActions></DialogActions>
            </Dialog>
 */}        </div>
    );
};