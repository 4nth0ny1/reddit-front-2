import { connect } from 'react-redux'
import { deleteComment } from '../../redux/actions/commentActions'

const Comment = (props) => {
    
    const handleClick = () => {
        props.deleteComment(props.comment.id)
    }
       
    return(
        <>
            <div className="individual-post-container" key={props.commentId}>
                <p>{props.comment.content}</p>
                <button onClick={handleClick}>Delete</button> 
            </div>
        </>
    )
}
  
  const mapDispatchToProps = (dispatch) => {
      return {
        deleteComment: (commentId) => dispatch(deleteComment(commentId)),
      }
  }
  
  export default connect(null, mapDispatchToProps)(Comment);
  