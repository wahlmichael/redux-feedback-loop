import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Feeling extends Component {
    state = {
        input: '',
        feeling: '',
    }

    handleClick = () => {
        this.setState({
            ...this.state,
            feeling: this.state.input,
        }, () => {
            this.props.dispatch({ type: "ADD_FEELING", payload: this.state.feeling })
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
      <h1>Feeling</h1>
      <input placeholder="How are you feeling?" onChange={this.handleChange}></input>
      <button onClick={this.handleClick}>Submit</button>
      <br/>
      <Link to="/understand" >Next</Link>
    </>  
    )}
}

const mapReduxStateToProps = state => state;

export default connect(mapReduxStateToProps)(Feeling);


