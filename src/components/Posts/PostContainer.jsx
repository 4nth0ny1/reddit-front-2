import Post from './Post';

const PostContainer = (props) => {

    const postArray = props.posts.map(post => {
        return <Post key={post.id} post={post} sortByCount={props.sortByCount} editPost={props.editPost} deletePost={props.deletePost}/>
    })

    debugger

    return(
        <>
            <div className="post-array">
                {postArray}
            </div>
        </>
    )
}

export default PostContainer;