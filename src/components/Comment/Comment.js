import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Comment extends Component {
    state = {
        input: '',
        comment: '',
    }

    handleClick = () => {
        this.setState({
            ...this.state,
            comment: this.state.input,
        }, () => {
            this.props.dispatch({ type: "ADD_COMMENT", payload: this.state.comment })
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
      <h1>Comment</h1>
      <input placeholder="Any comments to add?" onChange={this.handleChange}></input>
      <button onClick={this.handleClick}>Submit</button>
      <br/>
      <Link to="/" >Next</Link>
    </>  
    )}
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(Comment);
