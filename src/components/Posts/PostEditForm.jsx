import React, { Component } from "react";

class PostEditForm extends Component {
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

        const handleEditSubmit = (event) => {
            event.preventDefault()
            this.props.editPost(this.state)
        }

        return(
            <>
                <form onSubmit={handleEditSubmit}>
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
}

export default PostEditForm;