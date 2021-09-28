import React, { Component } from "react";
import { addComment } from "../../redux/actions/commentActions";
import { connect } from 'react-redux'

class CommentForm extends Component {
    constructor(props) {
        super (props)
        this.state = { 
            content: '', 
            post_id: this.props.postId
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
            if (this.state.content === "") {
                alert('please complete out the form')
            } else {
                this.props.addComment(this.state).then(comment => this.props.addAComment(comment))
                event.target.reset()
                this.setState({
                    content: ''
                })
            }

        }

        return(
            <>
                <form className="comment-form" onSubmit={handleSubmit}>
                    <textarea onChange={onChange} name="content" id="content" placeholder="content" rows="2" cols="50"/>
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