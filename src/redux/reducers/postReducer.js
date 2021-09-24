const postReducer = (state = { posts: [] }, action) => {
    switch(action.type){
        case "FETCH_POSTS":
            return {
                posts: action.posts
            }
        case "FILTER_POSTS":
            
            const filterBySearch = state.posts.filter(post => post.title.includes(action.search))
            
            return{
                posts: [...filterBySearch]
            }
        case "ADD_POST":
            return {
                posts: [...state.posts, action.post]
            }
        case "DELETE_POST":
            
            const newPost = state.posts.filter(post => post.id !== action.id)
            return {
                posts: newPost
            }
        case "EDIT_POST": 
            const editPost = state.posts.map(post => post.id === action.post.id ? action.post : post)
            return {
                posts: editPost
            }
        case "SORT_BY_COUNT":
            const sortByCount = state.posts.sort((a,b) => b.count - a.count)
            return{
                posts: [...sortByCount]
            }
        case "SORT_BY_ID": 
            const sortById = state.posts.sort((a,b) => b.id - a.id)
            return{
                posts: [...sortById]
            }
        case "SORT_BY_LARGEST_TITLE": 
            const sortByLargestTitle = state.posts.sort((a,b) => b.title.length - a.title.length)
            return{
                posts: [...sortByLargestTitle]
            }
        case "SORT_BY_SMALLEST_TITLE": 
            const sortBySmallestTitle = state.posts.sort((a,b) => a.title.length - b.title.length)
            return{
                posts: [...sortBySmallestTitle]
            }
        case "SORT_BY_SUBREDDIT": 
            const sortBySubreddit = state.posts.sort((a,b) => {
                let subredditA = a.subreddit.toUpperCase()
                let subredditB = b.subreddit.toUpperCase()
                if (subredditA < subredditB) {
                    return -1
                } 
                if (subredditA > subredditB) {
                    return 1
                }
                return 0
            })
            return{
                posts: [...sortBySubreddit]
            }
        case "SORT_BY_DESC_SUBREDDIT": 
            const sortByDescSubreddit = state.posts.sort((a,b) => {
                let subredditA = a.subreddit.toUpperCase()
                let subredditB = b.subreddit.toUpperCase()
                if (subredditA > subredditB) {
                    return -1
                } 
                if (subredditA < subredditB) {
                    return 1
                }
                return 0
            })
            return{
                posts: [...sortByDescSubreddit]
            }
        case "SORT_BY_NUM_COMMENTS": 
            const sortByNumComments = state.posts.sort((a,b) => b.comments.length - a.comments.length)
            return{
                posts: [...sortByNumComments]
            }
        case "SORT_BY_LEAST_NUM_COMMENTS": 
            const sortByLeastNumComments = state.posts.sort((a,b) => a.comments.length - b.comments.length)
            return{
                posts: [...sortByLeastNumComments]
            }
        
        default: 
            return state
    }
}

export default postReducer
