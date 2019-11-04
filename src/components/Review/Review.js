import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Review extends Component {

    componentDidMount(){
        this.getCurrentFeedback();
    }

    getCurrentFeedback = () => {
        console.log('in get current feedback')
    }

    sendFeedback = () => {
        console.log('feedback sending')
    }

  render() {
    return (
    <>
      <h1>Review Your Feedback</h1>
      <ul>
          <li>Feelings: {this.props.inputReducer.feeling}</li>
          <li>Understanding: {this.props.inputReducer.understanding}</li>
          <li>Support: {this.props.inputReducer.support}</li>
          <li>Comments: {this.props.inputReducer.comment}</li>
      </ul>
      <br/>
      <button onClick={this.sendFeedback}>Submit</button>
    </>  
    )}
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(Review);
