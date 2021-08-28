const Comment = (props) => {

       
    return(
        <>
            <div className="individual-post-container">
                <p>{props.comment.content}</p>
                <button onClick={() => props.deleteComment(props.comment.id)}>Delete</button> 
            </div>
        </>
    )
}

export default Comment;