import React, { Component } from "react";
import { editComment } from "../../redux/actions/commentActions";
import { connect } from 'react-redux'

class CommentEditForm extends Component {
    constructor(props) {
        super (props)
        this.state = { 
            content: this.props.comment.content, 
            id: this.props.comment.id
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
            this.props.editComment(this.state).then(comment => this.props.editAComment(comment))
            this.props.setShowCommentEditForm(false)
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
                    <input className="comment-form-input comment-content" type="text" onChange={onChange} name="content" id="content" value={this.state.content} placeholder="content" />
                    <button type="submit">Edit Comment</button>
                </form>
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        editComment: (comment) => dispatch(editComment(comment))
    }
}

export default connect(null, mapDispatchToProps)(CommentEditForm);

