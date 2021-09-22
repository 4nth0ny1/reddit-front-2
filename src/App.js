import './App.css';
import React from 'react';
import PostForm from './components/Posts/PostForm';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'


class App extends React.Component {
  render(){

    return (
      <>
        <div className="App">
          <Router>
            <Navigation />
              <Switch>
                <Route path="/" exact component={() => <Home />} />
                <Route path="/about" exact component={() => <About />} />
                <Route path="/contact" exact component={() => <Contact />} />
                <Route path="/posts/new" exact component={() => <PostForm />} />
              </Switch>
            <Footer />
          </Router>
        </div>
      </>
    );
  }
}

export default App
