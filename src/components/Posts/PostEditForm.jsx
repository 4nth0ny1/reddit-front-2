import React, { Component } from "react";

class PostEditForm extends Component {
    constructor(props) {
        super (props)
        this.state = {
            title: this.props.title, 
            content: this.props.content, 
            subreddit: this.props.subreddit, 
            id: this.props.id   
        }
    }
    
    render() {
        
        const onChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        const handleEditSubmit = (event) => {
            debugger
            event.preventDefault()
            this.props.editPost(this.state)
        }

        return(
            <>
                <form onSubmit={handleEditSubmit}>
                    <label htmlFor="title">title</label>
                    <input type="text" onChange={onChange} name="title" id="title" value={this.props.title} />
                    <label htmlFor="content">content</label>
                    <input type="text" onChange={onChange} name="content" id="content" value={this.props.content} />
                    <label htmlFor="subreddit">subreddit</label>
                    <input type="text" onChange={onChange} name="subreddit" id="subreddit" value={this.props.subreddit} />
                    <button type="submit">Submit Changes</button>
                </form>
            </>
        )
    }
}

export default PostEditForm;