import React, { useState, useEffect } from 'react';
import { Container, Grid, Paper, Typography, Box, Button } from '@mui/material';

export default function CommentList() {
    const API_URL = 'https://64d055bdff953154bb78ca25.mockapi.io/comments'

    const [comments, setComments] = useState([
        {
            name: '',
            email: '',
            comment: ''
      }
    ])

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
/*     const postComment = () => {}
    const deleteComment = () => {}
    const updateComment = () => {}
 */
    return(
        <>
        { comments.map((comment, index) => {
            <Grid item xs={5} key={index}>
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
        })}
    </>
    )

    /* const [email, setEmail] = useState([])
    const [userComments, setUserComments] = useState([])
  
    const getUserComments = () => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };
        
        fetch(API_URL, requestOptions)
            .then((response) => response.json())
            .then((result) => setUserComments(result))
            .catch((error) => console.log("error", error));
    };
    
    useEffect(() => {
        getUserComments();
    }, []);
  
  return (
      <Container>
        <Grid container paddingY={8} spacing={2} >
          {userComments.map((userComment, index) => (
            <Grid item xs={5}>
              <Paper elevation={12} square>
                  <Box paddingX={1}>
                      <Typography variant='h6' component='h6'>
                          {userComment.name} at {userComment.email}
                      </Typography>
                      <Box
                          paddingY={1}
                          sx={{
                              display: 'flex',
                              alignItems: 'center',
                          }}>
                          <Typography variant='body2' component='p'>
                              {userComment.comment}
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
  );*/
                    }
