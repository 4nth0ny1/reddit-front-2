import PostEditForm from "./PostEditForm"
import CommentContainer from "../Comments/CommentContainer"
import PostCount from './PostCount'
import PostContentShow from './PostContentShow'
import { useState } from 'react'
import { connect } from 'react-redux'
import { editPost, deletePost } from "../../redux/actions/postActions"

const Post = (props) => {
    const [ showEditForm, setShowEditForm ] = useState(false)
    const [ showComments, setShowComments ] = useState(false)
    const [ comments, setComments ] = useState(props.post.comments)
    const [ content, showContent ] = useState(false)

    const handleDelete = (e) => {
        props.deletePost(props.post.id)
    }

    const deleteComment = (commentId) => {
        fetch(`http://127.0.0.1:3000/comments/${commentId}`, {
          method: 'DELETE'
        })
        const filteredComments = comments.filter(comment => {
          return comment.id !== commentId
        })
        setComments(filteredComments)
    }

    const handleEdit = (e) => {
      props.editPost(props.post.id)
    }

    return (
        <>  
        <div className="entire-post-container">
            <div className="post-container">
              <div className="counter">
                <PostCount post={props.post}/>
              </div>
              <div className="content">
                <a className="post-title" onClick={() => showContent(!content)}>{props.post.title}</a>
                { content && <PostContentShow post={props.post}/> }
                <p className="post-subreddit">r/{props.post.subreddit}</p>
              </div>
            </div>
            <div className="post-buttons">
              <div className="post-button-left-div"></div>
              <div className="post-button-right-div">
                <button onClick={() => setShowEditForm(!showEditForm)}>Edit</button>
                <button onClick={() => setShowComments(!showComments)}>Comments</button>
                <button onClick={handleDelete}>Delete</button>
              </div>
            </div>
            <div className="post-comment-container">
              <div className="post-comment-left"></div>
              <div className="post-comment-right">
                { showComments && <CommentContainer comments={comments} deleteComment={deleteComment}/> }
                { showEditForm && <PostEditForm editPost={props.editPost} handleEdit={handleEdit} post={props.post} setShowEditForm={setShowEditForm}/> }
              </div>
            </div>
          </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    editPost: (post) => dispatch(editPost(post)),
    deletePost: (id) => dispatch(deletePost(id))
  }
}


export default connect(null, mapDispatchToProps)(Post);


