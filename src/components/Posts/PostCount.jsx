import React, { Component } from "react";

class PostCount extends Component {
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

    increment = (e) => {
        this.setState({
            ...this.state.count,
            count: this.state.count + 1
        })
    }

    decrement = (e) => {
        this.setState({
            ...this.state.count,
            count: this.state.count - 1
        })
    }

    handleSubmit = (e) => {
     
        fetch(`http://127.0.0.1:3000/posts/${this.props.post.id}`, {
            method: "PATCH", 
            headers: {
              "Content-Type": "application/json", 
            }, 
            body: JSON.stringify(this.state)
        })
       
    }      
    

    render() {

        const onChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <button type="submit" onClick={this.increment}>▲</button>
                    <div onChange={onChange}>{this.state.count}</div>
                    <button type="submit" onClick={this.decrement}>▼</button>
                </form>
            </>
        )
    }
}

export default PostCount;