const Comment = (props) => {
    
    const handleClick = () => {
        props.deleteComment(props.comment.id)
    }

    const handleEditClick = () => {
        props.editComment(props.comment.id)
    }
       
    return (
        <>
            <div className="individual-post-container" key={props.commentId}>
                <p>{props.comment.content}</p>
                <button onClick={handleEditClick}>Edit</button>
                <button onClick={handleClick}>Delete</button> 
            </div>
        </>
    )
}
  
export default Comment;
  