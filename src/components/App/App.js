import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Form from '../Form/Form.js'


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
          <Route exact path="/" render = {() => <Form reducer="ADD_FEELING" question="How are you feeling today?" next="/understand"/>} />
          <Route exact path="/understand" render = {() => <Form reducer="ADD_UNDERSTAND" question="How well you understand today?" next="/support"/>} />
          <Route exact path="/support" render = {() => <Form reducer="ADD_SUPPORT" question="How well do you feel supported?" next="/question"/>} />
          <Route exact path="/question" render = {() => <Form reducer="ADD_COMMENT" question="Do you have any questions?" next="/"/>} />
          <pre>{JSON.stringify(this.props.inputReducer)}</pre>
        </div>

      </Router>
    );
  }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(App);


