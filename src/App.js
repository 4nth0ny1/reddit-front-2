import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import PostContainer from './components/Posts/PostContainer';
import PostForm from './components/Posts/PostForm';

function App() {

  const [ posts, setPosts ] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:3000/posts')
    .then(res => res.json())
    .then(data => {
      
      setPosts(data)
    })
  }, [])   // useEffect continues to run, the empty array is a dependency array that is stops it from running when it sees an empty array 

 const addPost = (post) => {
   fetch('http://127.0.0.1:3000/posts', {
     method: "POST", 
     headers: {
       "Content-Type": "application/json", 
     }, 
     body: JSON.stringify(post)
   })
    const newPosts = [...posts, post]
    setPosts(newPosts)
  }

  const deletePost = (postId) => {
    fetch(`http://127.0.0.1:3000/posts/${postId}`, {
      method: 'DELETE'
    })
    const filteredPosts = posts.filter(post => {
      return post.id !== postId
    })
    setPosts(filteredPosts)
  }

  const editPost = (post) => {
    fetch(`http://127.0.0.1:3000/posts/${post.id}`, {
      method: "PATCH", 
      headers: {
        "Content-Type": "application/json", 
      }, 
      body: JSON.stringify(post)
    })
    const editedPosts = [...posts, post]
    setPosts(editedPosts)
   }

  const sortById = () => {
    const sortedPosts = [...posts].sort( function (a,b) {
      return b.id - a.id
    })
    setPosts(sortedPosts)
  }

  const sortByCount = () => {
    const sortedCounts = [...posts].sort( function (a,b) {
      return b.count - a.count
    })
    setPosts(sortedCounts)
  }

  return (
    <>
      <h1>reddit </h1>
      <PostForm addPost={addPost} />
      <button onClick={sortById}>Latest Posts</button>
      <button onClick={sortByCount}>Top Votes</button>
      <PostContainer posts={posts} editPost={editPost} deletePost={deletePost} />
    </>
  );
}

export default App;
