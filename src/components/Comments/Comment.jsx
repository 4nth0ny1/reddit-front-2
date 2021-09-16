import { useState } from 'react'
import CommentEditForm from './CommentEditForm'
import { connect } from 'react-redux'
import { deleteComment } from '../../redux/actions/commentActions'


const Comment = (props) => {
    const [ showCommentEditForm, setShowCommentEditForm ] = useState(false)

    
    const handleClick = () => {
        props.deleteComment(props.comment.id).then(comment => props.deleteAComment(comment.id))
    }
       
    return (
        <>
            <div className="individual-post-container" key={props.commentId}>
                <p>{props.comment.content}</p>
                <button onClick={() => setShowCommentEditForm(!showCommentEditForm)}>Edit</button>
                <button onClick={handleClick}>Delete</button> 
                { showCommentEditForm && <CommentEditForm setShowCommentEditForm={setShowCommentEditForm} editAComment={props.editAComment} comment={props.comment} />}
            </div>
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteComment: (id) => dispatch(deleteComment(id))
    }
}
  
export default connect(null, mapDispatchToProps)(Comment);
  