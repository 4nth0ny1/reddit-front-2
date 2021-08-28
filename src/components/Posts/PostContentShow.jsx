import React, { Component } from "react";

class PostContentShow extends Component {
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

        return(
            <>
                <p>{this.props.post.content}</p>
            </>
        )
    }
}

export default PostContentShow;