/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { FormControl, FormLabel, TextField, Button, Stack, Container, ButtonGroup, Box, Typography, Alert } from '@mui/material';


export default function Feedback() {
  
  // variables created for API link, state for existing users, new users and updated users data
    const API_URL = 'https://64d055bdff953154bb78ca25.mockapi.io/comments'

    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [userComments, setUserComments] = useState('')

    const [newUserName, setNewUserName] = useState('')
    const [newEmail, ,setNewEmail] = useState('')
    const [newUserComment, setNewUserComment] = useState('')

    const [updatedUserName, setUpdatedUserName] = useState('')
    const [updatedEmail, setUpdatedEmail] = useState('')
    const [updatedUserComment, setUpdatedUserComment] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(userName)
        postNewUserComment();
        {/* <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          This is a success alert — <strong>check it out!</strong>
       </Alert>; */}
    }
  
    useEffect(() => {
        getUserComments
    }, [])
  
// function for fetching users and displaying them

  function getUserComments() {
    fetch(API_URL)
      .then((data) => data.json())
      .then((data) => {
        setUserComments(data)
        console.log(data)
    })
  }

  // function for deleting a user
  function deleteUserComment(id) {
    fetch(API_URL + `/${id}`, {
      method: 'DELETE',
    }).then(() => getUserComments())
  }


  // function for creating a new user
  function postNewUserComment() {
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: newUserName,
        email: newEmail,
        comment: newUserComment
      }),
    })
    .then(() => getUserComments())
  }

  // function for updating an existing user

  function updateUserComment(e, userCommentObject) {
    e.preventDefault()

    let updatedUserCommentObject = {
      ...userCommentObject,
      name: updatedUserName,
      email: updatedEmail,
      comment: updatedUserComment
    }

    fetch(`${API_URL}/${userCommentObject.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedUserCommentObject),
    }).then(() => getUserComments())
  }

  // JSX for new and update user forms
    return (
        <Container>
            <form onSubmit={handleSubmit}>
            <h3>Let Us Know Your Thoughts</h3>
                <FormControl>
                    <Stack spacing={2} margin={2}>
                        <TextField variant='filled' fullWidth label='Name' type='text' onChange={(e) => setNewUserName(e.target.value)}></TextField>
                        <TextField variant='filled' fullWidth label='Email' type='email' onChange={(e) => setNewEmail(e.target.value)}></TextField>
                        <TextField id='outlined-multiline-flexible' fullWidth label='Please enter your feedback here.' multiline minRows={5} type='text' onChange={(e) => setNewUserComment(e.target.value)}></TextField>
                        <Button color='primary' variant='contained' type='submit'>SUBMIT</Button>
                        <ButtonGroup size='small' variant="contained" aria-label="outlined primary button group">
                          <Button onChange={(e) => setUpdatedUserName(e.target.value)}>UPDATE</Button>     
                          <Button onClick={() => deleteUserComment(userComment.id)}>DELETE</Button>
                        </ButtonGroup>
                    </Stack>
                </FormControl>
            </form>

            {userComments.map((userComment, index) => (
              <Box paddingX={2}>
                <Typography variant='h6' component='h6'>
                    {userComment.name}<br />
                    {userComment.email}<br />
                    {userComment.userComment}
                </Typography>
              </Box>
            ))}
{/*           <form>
            <label>Update Your Name:</label>
            <input
              onChange={(e) => setUpdatedUserName(e.target.value)}
            ></input>
            <br></br>
            <label>Update Your Comment:</label>
            <input
              onChange={(e) => setUpdatedUserComment(e.target.value)}
            ></input>
            <br></br>
            <button onClick={(e) => updatedUserComment(e, userComment)}>Update</button>
          </form>
*/}         
        </Container>
    )
}