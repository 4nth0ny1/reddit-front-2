import Comment from './Comment';

const CommentContainer = (props) => {
    
    const commentArray = props.comments.map(comment => {
        return <Comment key={comment.id} comment={comment} />
        
    })

    return(
        <>
            {commentArray}
        </>
    )
}

export default CommentContainer;