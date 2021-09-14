  
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './redux/reducers/rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import {Provider} from 'react-redux'
import thunk from "redux-thunk"
// import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore( 
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App/>
    </Provider>
  </Router>,
  document.getElementById('root')
);