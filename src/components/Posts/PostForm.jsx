import React, { Component } from "react";

class PostForm extends Component {
    constructor(props) {
        super (props)
        this.state = {
            title: '', 
            content: '', 
            subreddit: ''   
        }
    }
    
    render() {

        const onChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        const handleSubmit = (event) => {
            event.preventDefault()
            this.props.addPost(this.state)
            Array.from(document.querySelectorAll("input")).forEach(
                input => (input.value = "")
            )
            this.setState({
                [event.target.name]: [{}]
            })
        }

        return(
            <>
                <form className="post-form" onSubmit={handleSubmit}>
                    <label htmlFor="title">title</label>
                    <input type="text" onChange={onChange} name="title" id="title" />
                    <label htmlFor="content">content</label>
                    <input type="text" onChange={onChange} name="content" id="content" />
                    <label htmlFor="subreddit">subreddit</label>
                    <input type="text" onChange={onChange} name="subreddit" id="subreddit" />
                    <button type="submit">Create Post</button>
                </form>
            </>
        )
    }
}

export default PostForm;