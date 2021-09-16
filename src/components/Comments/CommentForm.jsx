import React, { Component } from "react";
import { addComment } from "../../redux/actions/commentActions";
import { connect } from 'react-redux'

class CommentForm extends Component {
    constructor(props) {
        super (props)
        this.state = { 
            content: '', 
            post_id: this.props.postId,
            id: ''
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
            this.props.addComment(this.state).then(comment => this.props.addAComment(comment))
            Array.from(document.querySelectorAll("input")).forEach(
                input => (input.value = "")
            )
            this.setState({
                [event.target.name]: [{}]
            })
        }

        return(
            <>
                <form className="comment-form" onSubmit={handleSubmit}>
                    <input className="comment-form-input comment-content" type="text" onChange={onChange} name="content" id="content" placeholder="content" />
                    <button type="submit">Add Comment</button>
                </form>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        addComment: (comment) => dispatch(addComment(comment))
    }
}

export default connect(null, mapDispatchToProps)(CommentForm);