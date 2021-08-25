const Comment = (props) => {

       
    return(
        <>
            <p>{props.comment.content}</p>
            <button onClick={() => props.deleteComment(props.comment.id)}>Delete Comment</button>
        </>
    )
}

export default Comment;