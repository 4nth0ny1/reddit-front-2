export const fetchPosts = (posts) => {
    
    return (dispatch) => {
        
        fetch(`http://localhost:3000/posts`)
        .then(res => res.json())
        .then(posts => {
            
            dispatch({type: "FETCH_POSTS", posts: posts})
        })
    }
}

export const addPost = (post) => {
    return (dispatch) => {
        const options = {
            method: "POST", 
            headers: {
                "Content-type": "application/json", 
                "accept": "application/json"
            }, 
            body: JSON.stringify({post})
        }

        fetch(`http://127.0.0.1:3000/posts`, options)
        .then(res => res.json())
        .then(post => {
            dispatch({type: "ADD_POST", post: post})
        })
    }
}

export const editPost = (post) => {
    return (dispatch) => {
        const options = {
            method: "PATCH", 
            headers: {
                "Content-type": "application/json", 
                "accept": "application/json"
            }, 
            body: JSON.stringify({post})
        }

        fetch(`http://localhost:3000/posts/${post.id}`, options)
        .then(res => res.json())
        .then(post => {
            dispatch({type: "EDIT_POST", post: post})
        })
    }
}

export const deletePost = (postId) => {
    return (dispatch) => {
        const options = {
            method: "DELETE"
        }

        fetch(`http://localhost:3000/posts/${postId}`, options)
        dispatch({type: "DELETE_POST", id: postId})
    }
}

export const sortByCount = () => {
    return (dispatch) => {
        dispatch({type: "SORT_BY_COUNT"})
    }
}

export const sortById = () => {
    return (dispatch) => {
        dispatch({type: "SORT_BY_ID"})
    }
}

export const sortByLargestTitle = () => {
    return (dispatch) => {
        dispatch({type: "SORT_BY_LARGEST_TITLE"})
    }
}

export const sortBySmallestTitle = () => {
    return (dispatch) => {
        dispatch({type: "SORT_BY_SMALLEST_TITLE"})
    }
}

export const sortBySubreddit = () => {
    return (dispatch) => {
        dispatch({type: "SORT_BY_SUBREDDIT"})
    }
}

export const sortByDescSubreddit = () => {
    return (dispatch) => {
        dispatch({type: "SORT_BY_DESC_SUBREDDIT"})
    }
}

export const sortByNumComments = () => {
    return (dispatch) => {
        dispatch({type: "SORT_BY_NUM_COMMENTS"})
    }
}

export const sortByLeastNumComments = () => {
    return (dispatch) => {
        dispatch({type: "SORT_BY_LEAST_NUM_COMMENTS"})
    }
}

export const filterBySearch = (search) => {
    return (dispatch) => {
        dispatch({type: "FILTER_POSTS", search: search})
    }
}