import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Understand extends Component {
    state = {
        input: '',
        understand: '',
    }

    handleClick = () => {
        this.setState({
            ...this.state,
            understand: this.state.input,
        }, () => {
            this.props.dispatch({ type: "ADD_UNDERSTAND", payload: this.state.understand })
        })
    }

    handleChange = (event) => {
        this.setState({
            ...this.state,
            input: event.target.value,
        })
    }

  render() {
    return (
    <>
      <h1>Understand</h1>
      <input placeholder="How well are you understanding?" onChange={this.handleChange}></input>
      <button onClick={this.handleClick}>Submit</button>
      <br/>
      <Link to="/support" >Next</Link>
    </>  
    )}
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(Understand);