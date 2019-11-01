import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Feeling from '../Feeling/Feeling.js'
import Understand from '../Understand/Understand.js'
import Support from '../Support/Support.js'
import Comment from '../Comment/Comment.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
          <Route exact path="/" component={Feeling} />
          <Route exact path="/understand" component={Understand} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/comment" component={Comment} />
          <pre>{JSON.stringify(this.props.inputReducer)}</pre>
        </div>

      </Router>
    );
  }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(App);


