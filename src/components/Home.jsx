import React from "react";
import { Link } from 'react-router-dom'
import PostContainer from './Posts/PostContainer'
import { connect } from 'react-redux'
import { fetchPosts, sortByCount, sortById, sortByLargestTitle, sortBySmallestTitle,
  sortBySubreddit, sortByDescSubreddit, sortByNumComments, sortByLeastNumComments
} from '../redux/actions/postActions'

class Home extends React.Component {

  componentDidMount(){
    this.props.fetchPosts()
    .then(() => this.props.sortById())
    document.getElementById('focus').focus()
  }

  constructor(props){
    super(props)
    this.state = {
      subredditSort: true, 
      titleSort: true, 
      commentSort: true
    }
  }
  
  render () {
    const handleSubredditSort = () => {
      if (this.state.subredditSort) {
        this.props.sortBySubreddit()
      } else {
        this.props.sortByDescSubreddit()
      }
      this.setState({
        subredditSort: !this.state.subredditSort
      })
    } 

    const handleTitleSort = () => {
      if (this.state.titleSort) {
        this.props.sortByLargestTitle()
      } else {
        this.props.sortBySmallestTitle()
      }
      this.setState({
        titleSort: !this.state.titleSort
      })
    } 

    const handleCommentSort = () => {
      if (this.state.commentSort) {
        this.props.sortByNumComments()
      } else {
        this.props.sortByLeastNumComments()
      }
      this.setState({
        commentSort: !this.state.commentSort
      })
    } 

    return (
      <div className="home">
        <div className="main-section-container">
          <div className="top-button-container">
            <div className="create-post-container">
              <img alt="logo" src="https://i.pinimg.com/originals/f7/80/6c/f7806c9cd7d5e52cbb148541327a6b87.jpg" />
                  <Link to="/posts/new"><button className="create-button bg-dark">Create Post</button></Link>
            </div>
            <div className="sort-container">
              <button id="focus" className="sort-buttons" onClick={this.props.sortById}>Latest Posts</button>
              <button className="sort-buttons" onClick={this.props.sortByCount}>Top Votes</button> 
              {/* <button onClick={handleChange}></button> */}
              { <button className="sort-buttons" onClick={handleSubredditSort}>{this.state.subredditSort ? 'Subreddit A-Z' : 'Subreddit Z-A'}</button>  }
              { <button className="sort-buttons" onClick={handleTitleSort}>{this.state.titleSort ? 'Largest Title' : 'Smallest Title'}</button>  }
              { <button className="sort-buttons" onClick={handleCommentSort}>{this.state.commentSort ? 'Most Comments' : 'Least Comments'}</button>  } 
            </div>
          </div>
          <div className="main-container">
            <PostContainer posts={this.props.filteredPosts} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.post.posts, 
    filteredPosts: state.post.filteredPosts
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
    sortBySmallestTitle: () => dispatch(sortBySmallestTitle()),
    sortByNumComments: () => dispatch(sortByNumComments()), 
    sortByLeastNumComments: () => dispatch(sortByLeastNumComments())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

