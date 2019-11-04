import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route} from 'react-router-dom';
import Form from '../Form/Form.js'
import Review from '../Review/Review.js'
import ThankYou from '../ThankYou/ThankYou.js'

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
          <Route exact path="/" render = {() => <Form type="number" reducer="ADD_FEELING" question="How are you feeling today?" next="/understand"/>} />
          <Route exact path="/understand" render = {() => <Form type="number" reducer="ADD_UNDERSTAND" question="How well you understand today?" next="/support"/>} />
          <Route exact path="/support" render = {() => <Form type="number" reducer="ADD_SUPPORT" question="How well do you feel supported?" next="/question"/>} />
          <Route exact path="/question" render = {() => <Form type="text" reducer="ADD_COMMENT" question="Do you have any questions?" next="/review"/>} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/thankYou" component={ThankYou} />
          <pre>{JSON.stringify(this.props.inputReducer)}</pre>
        </div>

      </Router>
    );
  }
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(App);


