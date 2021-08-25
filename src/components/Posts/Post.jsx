import PostEditForm from "./PostEditForm"
import CommentContainer from "../Comments/CommentContainer"
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

    const editPost = (post) => {
      fetch(`http://127.0.0.1:3000/posts/${post.id}`, {
        method: "PATCH", 
        headers: {
          "Content-Type": "application/json", 
        }, 
        body: JSON.stringify(post)
      })
      // const editedPosts = [...posts, post]
      // setPosts(editedPosts)
     }

    return (
        <>
            <p>{props.post.title}</p>
            <p>{props.post.content}</p>
            <p>{props.post.subreddit}</p>
            <button onClick={() => setEdits(!showEditForm)}>Edit</button>
            { showEditForm && <PostEditForm editPost={editPost} /> }
            <button onClick={() => setShowComments(!showComments)}>Comments</button>
            <button onClick={handleDelete}>Delete</button>
            { showComments && <CommentContainer comments={comments} deleteComment={deleteComment}/> }
        </>
    )
}


export default Post;

