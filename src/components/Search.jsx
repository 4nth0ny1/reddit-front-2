import React from 'react'
import { connect } from 'react-redux'
import { filterBySearch } from '../redux/actions/postActions'


class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ''
        }
    }

    render(){

        const onChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            })
        }

        const handleSubmit = (event) => {
            event.preventDefault()
            this.props.filterBySearch(this.state.search)
            this.setState({
                search: ''
            })
        }

        return(
            <form className="search-bar" onSubmit={handleSubmit}>
                <input className="search-bar-input" type="text" onChange={onChange} name="search" id="search" placeholder="search something" value={this.state.search} />
                <button type="submit">Search</button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        filterBySearch: (search) => dispatch(filterBySearch(search))
    }
}

export default connect(null, mapDispatchToProps)(Search)