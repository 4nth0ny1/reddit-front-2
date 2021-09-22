import React from "react";
import { Link } from 'react-router-dom'
import PostContainer from './Posts/PostContainer'
import { connect } from 'react-redux'
import { fetchPosts, sortByCount, sortById } from '../redux/actions/postActions'

class Home extends React.Component {
  
  componentDidMount(){
    this.props.fetchPosts()
  }



  render () {





    return (
      <div className="home">
        <div className="main-section-container">
          <div className="top-button-container">
            <div className="create-post-container">
              <img alt="logo" src="https://i.pinimg.com/originals/f7/80/6c/f7806c9cd7d5e52cbb148541327a6b87.jpg" />
              <button className="create-button bg-dark">
                  <Link to="/posts/new">Create Post</Link>
              </button>
              <div className="create-button-left-right"></div>
              <div className="create-button-right-right"></div>
            </div>
            <div className="sort-container">
              <button onClick={this.props.sortById}>Latest Posts</button>
              <button onClick={this.props.sortByCount}>Top Votes</button> 
            </div>
          </div>
          <div className="main-container">
            <PostContainer posts={this.props.posts} />
          </div>
        </div>
      </div>
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
    fetchPosts: () => dispatch(fetchPosts()), 
    sortByCount: () => dispatch(sortByCount()), 
    sortById: () => dispatch(sortById())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);