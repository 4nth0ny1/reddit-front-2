import Comment from './Comment';

const CommentContainer = (props) => {
    const commentArray = props.comments.map(comment => {
        return <Comment key={comment.id} comment={comment} editAComment={props.editAComment} editComment={props.editComment} deleteAComment={props.deleteAComment} />
    })
    return(
        <>
            {commentArray}
        </>
    )
}

export default CommentContainer;