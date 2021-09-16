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
  
export default Comment;
  