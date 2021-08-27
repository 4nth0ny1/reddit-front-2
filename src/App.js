import './App.css';
import React, { useEffect } from 'react';
import { useState } from 'react';
import PostContainer from './components/Posts/PostContainer';
import PostForm from './components/Posts/PostForm';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact } from "./components";
import { Link, withRouter } from "react-router-dom";

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

  const backToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    })
  }

  return (
    <>
      <div className="App">
        <Router>
          <Navigation />
            <Switch>
              <Route path="/" exact component={() => <Home />} />
              <Route path="/about" exact component={() => <About />} />
              <Route path="/contact" exact component={() => <Contact />} />
              <Route path="/submit" exact component={() => <PostForm addPost={addPost}/>} />
            </Switch>
            <button>
                <Link to="/submit">Create Post</Link>
            </button>
            <button onClick={sortById}>Latest Posts</button>
            <button onClick={sortByCount}>Top Votes</button>
            <PostContainer posts={posts} editPost={editPost} deletePost={deletePost} />
            <button onClick={backToTop}>Back to Top</button>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
