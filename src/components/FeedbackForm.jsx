import React, {useState, useEffect} from 'react';
import { Container, Grid, Paper, Box, Typography, Button, Stack, TextField, FormControl, FormLabel} from '@mui/material';

export default function FeedbackForm ({postComment, handleName, handleEmail, handleComment, updateComment}) {
    
    return (
        <Grid container paddingTop={5} spacing={2} display="flex" justifyContent="center" alignItems="center" >
            <Grid item xs={8}>
                <Paper elevation={12} square>
                    <Box paddingTop={2} paddingX={2} >
                        <Typography variant='h5' component='h5'>
                            What Do You Think?
                        </Typography>
                    </Box>
                    <Box
                            paddingY={2}
                            paddingX={2}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                            <Typography variant='body2' component='p'>
                                Please use this form to provide your feedback.
                            </Typography>
                    </Box>
                </Paper>
            </Grid>
            <Grid item xs={8}>
                <Paper elevation={12} square >
                    <Box paddingY={2} paddingX={2}>
                    <form onSubmit={postComment}>
                        <label>NAME:<br />
                            <input
                            type="text"
                            onChange={(e) => handleName(e.target.value)}
                            />
                        </label><br /><br />
                        <label>EMAIL:<br />
                            <input
                            type="text"
                            onChange={(e) => handleEmail(e.target.value)}
                            />
                        </label><br /><br />
                        <label>COMMENT:<br />
                            <input
                            type="textarea"
                            rows="5"
                            columns='25' 
                            onChange={(e) => handleComment(e.target.value)}
                            />
                        </label><br /><br />
                        <Button color='primary' variant='contained' type='submit' >SUBMIT</Button>
                    </form>
                    </Box>
                </Paper>
            </Grid>
        </Grid>
    );
};