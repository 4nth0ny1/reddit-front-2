import Comment from './Comment';

const CommentContainer = (props) => {

    const commentArray = props.comments.map(comment => {
        return <Comment key={comment.id} comment={comment} deleteComment={props.deleteComment}/>
    })

    return(
        <>
            {commentArray}
        </>
    )
}

export default CommentContainer;