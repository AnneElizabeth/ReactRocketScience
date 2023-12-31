import { useState, useEffect } from 'react';
import { Container, Paper, Grid, Typography, Box, Button, TextField } from '@mui/material';
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

        const [updatedComment, setUpdatedComment] = useState('')

        function handleName(nameValue) {
            setNewComment({
                ...newComment,
                name: nameValue,
            })
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

        function handleUpdatedComment(updatedCommentValue) {
            setUpdatedComment(updatedCommentValue)
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
                headers: { 'Content-Type' : 'application/json'},
                body: JSON.stringify(newComment)
            }).then(() => getComments())
        }
    
        const deleteComment = (id) => {
            fetch(`${API_URL}/${id}`,{
                method: 'DELETE'
            }).then(() => getComments())
        }

        const updateComment = (comment) => {
            comment.comment = updatedComment
           
            fetch(`${API_URL}/${comment.id}`, {
                method: 'PUT',
                headers: { 'Content-Type':'application/json'},
                body: JSON.stringify(comment)
            }).then(() => getComments())
        }


    return (
        <Container>
            <FeedbackForm
                postComment={postComment}
                handleName={handleName}
                handleEmail={handleEmail}
                handleComment={handleComment}
                deleteComment={deleteComment}
                updateComment={updateComment}
                handleUpdatedComment={handleUpdatedComment}
            />
            <Grid container paddingY={12} spacing={2} >
            {comments.map((comment, index) => (
                <Grid item xs={12} key={index}>
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
                            <form onSubmit={() => updateComment(comment)}>
                                <label>UPDATE COMMENT:<br />
                                    <input
                                        type="text"
                                        onChange={(e) => handleUpdatedComment(e.target.value)}
                                        sx={{width: 150}}
                                        />
                                </label><br /><br /> 
                            
                                <Button onClick={() => updateComment(comment)} color='primary' variant='contained'>UPDATE</Button>
                                <Button sx={{ml:5}} onClick={() => deleteComment(comment.id)} color='primary' variant='contained'>DELETE</Button>
                            </form>
                        </Box>
                    </Box>
                </Paper>
            </Grid>
            ))}
            </Grid>
        </Container>
    )
}