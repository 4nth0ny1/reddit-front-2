import './App.css';
import React from 'react';
import PostForm from './components/Posts/PostForm';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Terms from './components/Terms'

class App extends React.Component {
  render(){
    console.log(this.props.location.pathname)
    return (
      <>
        <div className="App">
          <Router>
            <Navigation />
              <Switch>
                <Route path="/" exact component={() => <Home />} />
                <Route path="/about" exact component={() => <About />} />
                <Route path="/terms" exact component={() => <Terms />} />
                <Route path="/posts/new" exact component={() => <PostForm />} />
              </Switch>
            <Footer /> 
          </Router>
        </div>
      </>
    );
  }
}

export default withRouter(App)
