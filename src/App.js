import './App.css';
import React from 'react';
import { useState } from 'react';
import PostContainer from './components/Posts/PostContainer';
import PostForm from './components/Posts/PostForm';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Contact } from "./components";
import { Link, withRouter } from "react-router-dom";
import { fetchPosts } from './redux/actions/postActions'
import { connect } from 'react-redux'

class App extends React.Component {

  componentDidMount(){
    this.props.fetchPosts()
  }

  // const [ posts, setPosts ] = useState([])

  // const sortById = () => {
  //   const sortedPosts = [...posts].sort( function (a,b) {
  //     return b.id - a.id
  //   })
  //   setPosts(sortedPosts)
  // }

  // const sortByCount = () => {
  //   const sortedCounts = [...posts].sort( function (a,b) {
  //     return b.count - a.count
  //   })
  //   setPosts(sortedCounts)
  // }

  // const backToTop = () => {
  //   window.scrollTo({
  //     top: 0, 
  //     behavior: 'smooth'
  //   })
  // }
  render(){
    return (
      <>
        <div className="App">
          <Router>
            <Navigation />
              <Switch>
                <Route path="/" exact component={() => <Home />} />
                <Route path="/about" exact component={() => <About />} />
                <Route path="/contact" exact component={() => <Contact />} />
                <Route path="/submit" exact component={() => <PostForm />} />
              </Switch>
              <div className="main-section-container">
                <div className="top-button-container">
                  <div className="create-post-container">
                    <img src="https://i.pinimg.com/originals/f7/80/6c/f7806c9cd7d5e52cbb148541327a6b87.jpg" />
                    <button className="create-button bg-dark">
                        <Link to="/submit">Create Post</Link>
                    </button>
                    <div className="create-button-left-right"></div>
                    <div className="create-button-right-right"></div>
                  </div>
                  <div className="sort-container">
                    {/* <button onClick={sortById}>Latest Posts</button>
                    <button onClick={sortByCount}>Top Votes</button> */}
                  </div>
                </div>
                <div className="main-container">
                  <PostContainer posts={this.props.posts} />
                </div>
              </div>
            {/* <Footer backToTop={backToTop}/> */}
          </Router>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.post.posts
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
