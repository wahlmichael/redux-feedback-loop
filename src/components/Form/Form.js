import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Form extends Component {
    state = {
        input: '',
    }

    handleClick = () => {
        this.setState({
            ...this.state,
            feeling: this.state.input,
        }, () => {
            this.props.dispatch({ type: this.props.reducer, payload: this.state.input })
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
      <h1>{this.props.question}</h1>
      <input min="1" max="5" type="number" onChange={this.handleChange}></input>
      <button onClick={this.handleClick}>Submit</button>
      <br/>
      <Link to={this.props.next} >Next</Link>
    </>  
    )}
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(Form);
