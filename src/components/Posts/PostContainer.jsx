import Post from './Post';

const PostContainer = (props) => {

    const postArray = props.posts.map(post => {
        return <Post key={post.id} post={post} editPost={props.editPost} deletePost={props.deletePost}/>
    })

    return(
        <>
            <div className="post-array">
                {postArray}
            </div>
        </>
    )
}

export default PostContainer;