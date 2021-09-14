import commentReducer from './commentReducer'
import postReducer from './postReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    comment: commentReducer,
    post: postReducer
})

export default rootReducer;