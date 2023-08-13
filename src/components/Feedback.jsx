/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { FormControl, FormLabel, TextField, Button, Stack, Container } from '@mui/material';


export default function Feedback() {
  
  // variables created for API link, state for existing users, new users and updated users data
    const API_URL = 'https://64d055bdff953154bb78ca25.mockapi.io/comments'

    const [userName, setUserName] = useState([])
    const [email, setEmail] = useState([])
    const [userComments, setUserComments] = useState([])

    const [newUserName, setNewUserName] = useState('')
    const [newEmail, ,setNewEmail] = useState('')
    const [newUserComment, setNewUserComment] = useState('')

    const [updatedUserName, setUpdatedUserName] = useState('')
    const [updatedEmail, setUpdatedEmail] = useState('')
    const [updatedUserComment, setUpdatedUserComment] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        postNewUserComment();
        alert("Form Submitted");
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
    }).then(() => getUserComments())
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
                        <TextField variant='outlined' label='Name' onChange={(e) => setUserName(e.target.value)}></TextField>
                        <TextField variant='outlined' label='Email' onChange={(e) => setEmail(e.target.value)}></TextField>
                        <TextField id='outlined-multiline-flexible' label='Please enter your feedback here.' multiline minRows={5} onChange={(e) => setUserComment(e.target.value)}></TextField>
                        <Button color='primary' variant='contained' type='submit' >SUBMIT</Button>
                    </Stack>
                </FormControl>
            </form>

       {/*  {userComments.map((userComment, index) => (
            <div className="mapContainer" key={index}>
                Name: {userComment.name} <br /><br />
                Email: {userComment.email}<br /><br />
                Comment: {userComment.userComment} <br /><br />
                <button onClick={() => deleteUserComment(userComment.id)}>🗑</button>
            </div> */}
        </Container>
    )

          {/* <form>
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
          </form> */}

}