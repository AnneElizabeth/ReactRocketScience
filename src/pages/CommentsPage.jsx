/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';


export default function CommentsPage() {
  
  // variables created for API link, state for existing users, new users and updated users data
  const API_URL = 'https://64d055bdff953154bb78ca25.mockapi.io/comments'

  const [userComments, setUserComments] = useState([])
  const [userName, setUserName] = useState([])

  const [newUserName, setNewUserName] = useState('')
  const [newUserComment, setNewUserComment] = useState('')

  const [updatedUserName, setUpdatedUserName] = useState('')
  const [updatedUserComment, setUpdatedUserComment] = useState('')
  
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
  function postNewUserComment(e) {
    e.preventDefault()
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: newUserName,
        comment: newUserComment,
      }),
    }).then(() => getUserComments())
  }

  // function for updating an existing user

  function updateUserComment(e, userCommentObject) {
    e.preventDefault()

    let updatedUserCommentObject = {
      ...userCommentObject,
      name: updatedUserName,
      comment: updatedUserComment,
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
    <div className="App">
      <form>
        <h3>Let Us Know Your Thoughts</h3>
        <label>Your Name:</label>
        <input onChange={(e) => setNewUserName(e.target.value)}></input><br></br>
        <label>Comment</label>
        <input onChange={(e) => setNewUserComment(e.target.value)}></input><br></br>
        <button onClick={(e) => postNewUserComment(e)}>Submit</button>
      </form>
      <br></br>

      {userComments.map((userComment, index) => (
        <div className="mapContainer" key={index}>
          <div>
            Name: {userComment.name} <br></br>
            Comment: {userComment.userComment} <br></br>
            <button onClick={() => deleteUserComment(userComment.id)}>🗑</button>
          </div>
          <form>
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
        </div>
      ))}
    </div>
  )
}