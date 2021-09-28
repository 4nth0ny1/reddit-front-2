import React, { Component } from "react";
import { editPost } from "../../redux/actions/postActions";
import { connect } from 'react-redux'

class PostCount extends Component {
    constructor(props) {
        super (props)
        this.state = {
            title: this.props.post.title, 
            content: this.props.post.content, 
            subreddit: this.props.post.subreddit, 
            id: this.props.post.id, 
            count: this.props.post.count,
            increment: false,
            decrement: false
        }
    }

    increment = (e) => {
        this.setState({
            ...this.state.count,
            count: this.state.count + 1,
            increment: true
        })
    }

    decrement = (e) => {
        this.setState({
            ...this.state.count,
            count: this.state.count - 1,
            decrement: true
        })
    }    

    render() {

        const onChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        const handleSubmit = (event) => {
            event.preventDefault()
            this.props.editPost(this.state)
        }

        return (
            <>
                <form onSubmit={handleSubmit}>
                    <button className={`counter-button ${this.state.increment ? 'orange-bg' : ''}`} type="submit" onClick={this.increment}>▲</button>
                    { this.state.count < 0 ? <div>-</div> : <div onChange={onChange}>{this.state.count}</div>}
                    <button className={`counter-button ${this.state.decrement ? 'orange-bg' : ''}`} type="submit" onClick={this.decrement}>▼</button>
                </form>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        editPost: (post) => dispatch(editPost(post))
    }
}

export default connect(null, mapDispatchToProps)(PostCount);