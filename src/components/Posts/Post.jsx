import PostEditForm from "./PostEditForm"
import CommentContainer from "../Comments/CommentContainer"
import PostCount from './PostCount'
import { useState } from 'react'

const Post = (props) => {
    const [ showEditForm, setEdits ] = useState()
    const [ showComments, setShowComments ] = useState(false)
    const [ comments, setComments ] = useState(props.post.comments)

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
                <p>{props.post.title}</p>
                <p>{props.post.content}</p>
                <p>{props.post.subreddit}</p>
              </div>
            </div>
            <div className="post-buttons">
              <div className="post-button-left-div"></div>
              <div className="post-button-right-div">
                <button onClick={() => setEdits(!showEditForm)}>Edit</button>
                {/* { showEditForm && <PostEditForm editPost={props.editPost} handleEdit={handleEdit} post={props.post} /> } */}
                <button onClick={() => setShowComments(!showComments)}>Comments</button>
                <button onClick={handleDelete}>Delete</button>
              </div>
            </div>
            <div className="post-comment-container">
              <div className="post-comment-left"></div>
              <div className="post-comment-right">
                { showComments && <CommentContainer comments={comments} deleteComment={deleteComment}/> }
                { showEditForm && <PostEditForm editPost={props.editPost} handleEdit={handleEdit} post={props.post} /> }
              </div>
            </div>
          </div>
        </>
    )
}


export default Post;


