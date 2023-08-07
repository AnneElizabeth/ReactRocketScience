/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';


export default function CommentsPage() {
  
  // variables created for API link, state for existing users, new users and updated users data
  const API_URL = 'https://64d055bdff953154bb78ca25.mockapi.io/comments'

  const [comments, setComments] = useState([])

  const [newName, setNewName] = useState('')
  const [newUserComment, setNewUserComment] = useState('')

  const [updatedName, setUpdatedName] = useState('')
  const [updatedUserComment, setUpdatedUserComment] = useState('')
  
  useEffect(() => {
      getComments
    }, [])
  
// function for fetching users and displaying them

  function getComments() {
    fetch(API_URL)
      .then((data) => data.json())
      .then((data) => {
        setComments(data)
        console.log(data)
    })
  }

  // function for deleting a user
  function deleteComment(id) {
    fetch(API_URL + `/${id}`, {
      method: 'DELETE',
    }).then(() => getComments())
  }


  // function for creating a new user
  function postNewComment(e) {
    e.preventDefault()
    fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: newName,
        comment: newUserComment,
      }),
    }).then(() => getComments())
  }

  // function for updating an existing user

  function updateComment(e, commentObject) {
    e.preventDefault()

    let updatedCommentObject = {
      ...commentObject,
      name: updatedName,
      comment: updatedUserComment,
    }

    fetch(`${API_URL}/${commentObject.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCommentObject),
    }).then(() => getComments())
  }

  // JSX for new and update user forms
  return (
    <div className="App">
      <form>
        <h3>Comments</h3>
        <label>Name</label>
        <input onChange={(e) => setNewName(e.target.value)}></input><br></br>
        <label>Comment</label>
        <input onChange={(e) => setNewUserComment(e.target.value)}></input><br></br>
        <button onClick={(e) => postNewComment(e)}>Submit</button>
      </form>
      <br></br>

      {comments.map((comment, index) => (
        <div className="mapContainer" key={index}>
          <div>
            Name: {comment.name} <br></br>
            Comment: {comment.userComment} <br></br>
            <button onClick={() => deleteComment(comment.id)}>🗑</button>
          </div>
          <form>
            <label>Update Name</label>
            <input
              onChange={(e) => setUpdatedName(e.target.value)}
            ></input>
            <br></br>
            <label>Update Comment</label>
            <input
              onChange={(e) => setUpdatedUserComment(e.target.value)}
            ></input>
            <br></br>
            <button onClick={(e) => updatedUserComment(e, comment)}>Update</button>
          </form>
        </div>
      ))}
    </div>
  )
}