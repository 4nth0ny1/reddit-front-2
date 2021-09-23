const commentReducer = (state = { comments: [] }, action) => {
    switch(action.type){
        case "FETCH_COMMENTS":
            return {
                comments: action.comments   
            }
        case "ADD_COMMENT":
            return {
                comments: [...state.comments, action.comment]
            }
        case "DELETE_COMMENT":
            
            const newComment = state.comments.filter(comment => comment.id !== action.id)
            return {
                comments: newComment
            }
        case "EDIT_COMMENT": 
            const editComment = state.comments.map(comment => comment.id === action.comment.id ? action.comment : comment)
            return {
                comments: editComment
            }

        
        default: 
            return state
    }
}

export default commentReducer