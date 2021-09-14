import Post from './Post';
import PostForm from './PostForm';

const PostContainer = (props) => {

    const postArray = props.posts.map(post => {
        return <Post key={post.id} post={post}/>
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