export const fetchComments = (comments) => {
    
    return (dispatch) => {
        
        fetch(`http://localhost:3000/comments`)
        .then(res => res.json())
        .then(comments => {
            
            dispatch({type: "FETCH_COMMENTS", comments: comments})
        })
    }
}

export const addComment = (comment) => {
    return (dispatch) => {
        const options = {
            method: "POST", 
            headers: {
                "Content-type": "application/json", 
                "accept": "application/json"
            }, 
            body: JSON.stringify({comment})
        }
        return fetch(`http://127.0.0.1:3000/comments`, options)
        .then(res => res.json())
    }
}

export const editComment = (comment) => {
    return (dispatch) => {
        const options = {
            method: "PATCH", 
            headers: {
                "Content-type": "application/json", 
                "accept": "application/json"
            }, 
            body: JSON.stringify({comment})
        }

        fetch(`http://localhost:3000/comments/${comment.id}`, options)
        .then(res => res.json())
    }
}

export const deleteComment = (commentId) => {
    return (dispatch) => {
        const options = {
            method: "DELETE"
        }

        fetch(`http://localhost:3000/comments/${commentId}`, options)
        .then(res => res.json())
        .then(message => {
            dispatch({type: "DELETE_COMMENT", id: commentId})
        })
    }
}