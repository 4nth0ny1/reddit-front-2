import React, { Component } from "react";

class PostEditForm extends Component {
    constructor(props) {
        super (props)
        this.state = {
            title: this.props.post.title, 
            content: this.props.post.content, 
            subreddit: this.props.post.subreddit, 
            id: this.props.post.id, 
            count: this.props.post.count 
        }
    }
    
    render() {
        
        const onChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        const handleEditSubmit = (event) => {
            event.preventDefault()
            this.props.editPost(this.state)
            this.props.setShowEditForm(false)
        }

        return (
            <>
                <form className="post-edit-form-container" onSubmit={handleEditSubmit}>
                    <label htmlFor="title">title</label>
                    <input type="text" onChange={onChange} name="title" id="title" value={this.state.title} />
                    <label htmlFor="content">content</label>
                    <input type="text" onChange={onChange} name="content" id="content" value={this.state.content} />
                    <label htmlFor="subreddit">subreddit</label>
                    <input type="text" onChange={onChange} name="subreddit" id="subreddit" value={this.state.subreddit} />
                    <button type="submit">Submit Changes</button>
                </form>
            </>
        )
    }
}

export default PostEditForm;