const postReducer = (state = { posts: [], filteredPosts: [] }, action) => {
    switch(action.type){
        case "FETCH_POSTS":
            return {
                posts: action.posts,
                filteredPosts: action.posts
            }
        case "FILTER_POSTS":
            
            const filterBySearch = state.posts.filter(post => post.title.toLowerCase().includes(action.search.toLowerCase()))
            
            return {
                posts: state.posts, 
                filteredPosts: [...filterBySearch]
            }
        case "ADD_POST":
            return {
                posts: [...state.posts, action.post], 
                filteredPosts: [...state.posts, action.post]

            }
        case "DELETE_POST":
            const newPost = state.posts.filter(post => post.id !== action.id)
            return {
                posts: newPost,
                filteredPosts: newPost

            }
        case "EDIT_POST": 
            const editPost = state.posts.map(post => post.id === action.post.id ? action.post : post)
            return {
                posts: editPost, 
                filteredPosts: editPost
            }
        case "SORT_BY_COUNT":
            const sortByCount = state.posts.sort((a,b) => b.count - a.count)
            return{
                posts: [...sortByCount],
                filteredPosts: [...sortByCount]
            }
        case "SORT_BY_ID": 
            const sortById = state.posts.sort((a,b) => b.id - a.id)
            return{
                posts: [...sortById],
                filteredPosts:  [...sortById]

            }
        case "SORT_BY_LARGEST_TITLE": 
            const sortByLargestTitle = state.posts.sort((a,b) => b.title.length - a.title.length)
            return{
                posts: [...sortByLargestTitle],
                filteredPosts:  [...sortByLargestTitle]
            }
        case "SORT_BY_SMALLEST_TITLE": 
            const sortBySmallestTitle = state.posts.sort((a,b) => a.title.length - b.title.length)
            return{
                posts: [...sortBySmallestTitle],
                filteredPosts:  [...sortBySmallestTitle]

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
                posts: [...sortBySubreddit],
                filteredPosts:  [...sortBySubreddit]

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
                posts: [...sortByDescSubreddit],
                filteredPosts:  [...sortByDescSubreddit]
            }
        case "SORT_BY_NUM_COMMENTS": 
            const sortByNumComments = state.posts.sort((a,b) => b.comments.length - a.comments.length)
            return{
                posts: [...sortByNumComments],
                filteredPosts:  [...sortByNumComments]

            }
        case "SORT_BY_LEAST_NUM_COMMENTS": 
            const sortByLeastNumComments = state.posts.sort((a,b) => a.comments.length - b.comments.length)
            return{
                posts: [...sortByLeastNumComments],
                filteredPosts:  [...sortByLeastNumComments]

            }
        
        default: 
            return state
    }
}

export default postReducer
