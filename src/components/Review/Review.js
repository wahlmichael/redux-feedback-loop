import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Review extends Component {

  render() {
    return (
    <>
      <h1>Review</h1>
      <br/>
      <Link to={this.props.next} >Next</Link>
    </>  
    )}
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(Review);
