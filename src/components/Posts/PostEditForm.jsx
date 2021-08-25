const PostEditForm = (props) => {

    const onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    return(
        <>
            <form>
                <label htmlFor="title">title</label>
                <input type="text" onChange={onChange} name="title" id="title" />
                <label htmlFor="content">content</label>
                <input type="text" onChange={onChange} name="content" id="content" />
                <label htmlFor="subreddit">subreddit</label>
                <input type="text" onChange={onChange} name="subreddit" id="subreddit" />
                <button type="submit">Submit Changes</button>
            </form>
        </>
    )
}

export default PostEditForm;