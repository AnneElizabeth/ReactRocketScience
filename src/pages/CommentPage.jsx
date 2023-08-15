import { useState, useEffect } from 'react';
import { Container, Paper, Grid, Typography, Box, Button } from '@mui/material';
import Form from '../components/Form';

export default function CommentPage() {
        const API_URL = 'https://64d055bdff953154bb78ca25.mockapi.io/comments'
    
        const [comments, setComments] = useState([
            {
                name: '',
                email: '',
                comment: ''
          }
        ])

        const [newComment, setNewComment] = useState([
            {
                name: '',
                email: '',
                comment: ''
            }
        ])

        function handleName(nameValue) {
            setNewComment({
                ...newComment,
                name: nameValue,
            })
        }

        function handleEmail() {

        }

        function handleComment() {

        }
    
        useEffect(() => {
            fetch(API_URL)
            .then((data) => data.json())
            .then((data) => setComments(data)) 
        }, [])
    
        const getComments = () => {
            fetch(API_URL)
            .then((data) => data.json())
            .then((data) => setComments(data)) 
        }

        const postComment = () => {
            fetch(API_URL,{
                method: 'POST',
                headers: { 'ContentType' : 'Application/json'},
                body: JSON.stringify(newComment)
            })
        }
    
    
    
    
    
        /*const deleteComment = () => {}
    const updateComment = () => {}
 */
    return (
        <Container>
            <Form handleName={handleName} />
            <Grid container paddingY={8} spacing={2} >
            {comments.map((comment, index) => (
                <Grid item xs={6} key={index}>
                <Paper elevation={12} square>
                    <Box paddingX={1}>
                        <Typography variant='h6' component='h6'>
                            {comment.name} at {comment.email}
                        </Typography>
                        <Box
                            paddingY={1}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                            <Typography variant='body2' component='p'>
                                {comment.comment}
                            </Typography>
                        </Box>
                        <Box
                            paddingY={1}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}>
                            <Button color='primary' variant='contained'>EDIT</Button>  <Button color='primary' variant='contained'>DELETE</Button>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
            ))}
            </Grid>
        </Container>
    )
}