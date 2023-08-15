import { useState, useEffect } from 'react';
import { Container, Paper, Grid, Typography, Box, Button } from '@mui/material';
import FeedbackForm from '../components/FeedbackForm';

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
            console.log(newComment)
        }

        function handleEmail(emailValue) {
            setNewComment({
                ...newComment,
                email: emailValue
            })
        }

        function handleComment(commentValue) {
            setNewComment({
                ...newComment,
                comment: commentValue
            })
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

        const postComment = (e) => {
            e.preventDefault()

            fetch(API_URL,{
                method: 'POST',
                headers: { 'ContentType' : 'Application/json'},
                body: JSON.stringify(newComment)
            }).then(() => getComments())
        }
    
        const deleteComment = (id) => {
            fetch(`${API_URL}/${id}`,{
                method: 'DELETE'
            }).then(() => getComments())
        }



    /*const updateComment = () => {}
 */
    return (
        <Container>
            <FeedbackForm
                postComment={postComment}
                handleName={handleName}
                handleEmail={handleEmail}
                handleComment={handleComment}
                deleteComment={deleteComment}
            />
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
                            <Button color='primary' variant='contained'>UPDATE</Button>  <Button onClick={() => deleteComment(comment.id)} color='primary' variant='contained'>DELETE</Button>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
            ))}
            </Grid>
        </Container>
    )
}