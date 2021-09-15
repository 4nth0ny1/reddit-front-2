import Comment from './Comment';

const CommentContainer = (props) => {

    const commentArray = props.comments.map(comment => {
        return <Comment key={comment.id} comment={props.comment} addComment={props.addComment} deleteComment={props.deleteComment}/>
    })

    return(
        <>
            {commentArray}
        </>
    )
}

export default CommentContainer;