import React from "react";
import { Link } from 'react-router-dom'
import PostContainer from './Posts/PostContainer'
import { connect } from 'react-redux'
import { 
  fetchPosts, 
  sortByCount, 
  sortById, 
  sortByLargestTitle,
  sortBySubreddit, 
  sortByDescSubreddit,
  sortByNumComments
} 
from '../redux/actions/postActions'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {sortBySubReddit: false};
  }
  
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
                  <Link to="/posts/new"><button className="create-button bg-dark">Create Post</button></Link>
              <div className="create-button-left-right"></div>
              <div className="create-button-right-right"></div>
            </div>
            <div className="sort-container">
              <button onClick={this.props.sortById}>Latest Posts</button>
              <button onClick={this.props.sortByCount}>Top Votes</button> 
              { this.props.sortBySubreddit ? <button onClick={this.props.sortBySubreddit}>Subreddit A-Z</button> : <button onClick={this.props.sortByDescSubreddit}>Subreddit Z-A</button> }
              <button onClick={this.props.sortByLargestTitle}>Largest Title</button> 
              <button onClick={this.props.sortByNumComments}>Most Comments</button> 
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
    sortById: () => dispatch(sortById()),
    sortBySubreddit: () => dispatch(sortBySubreddit()),
    sortByDescSubreddit: () => dispatch(sortByDescSubreddit()),
    sortByLargestTitle: () => dispatch(sortByLargestTitle()),
    sortByNumComments: () => dispatch(sortByNumComments())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);