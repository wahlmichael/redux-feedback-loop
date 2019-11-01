import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Support extends Component {
    support = {
        input: '',
        support: '',
    }

    handleClick = () => {
        this.setState({
            ...this.state,
            support: this.state.input,
        }, () => {
            this.props.dispatch({ type: "ADD_SUPPORT", payload: this.state.support })
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
      <h1>Support</h1>
      <input placeholder="How well are you understanding?" onChange={this.handleChange}></input>
      <button onClick={this.handleClick}>Submit</button>
      <br/>
      <Link to="/comment" >Next</Link>
    </>  
    )}
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(Support);
