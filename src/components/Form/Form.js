import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Form extends Component {
    state = {
        input: '',
    }

    setStateAfterClick = () => {
        this.setState({
            ...this.state,
            feeling: this.state.input,
        }, () => {
            this.props.dispatch({ type: this.props.reducer, payload: this.state.input });
            this.props.history.push(this.props.next) 
        }) 
    }

    handleClick = () => { //Checks to see what type the input was and validates accordingly
        if(this.props.type === 'number'){
            if (this.state.input && this.state.input <= 5 && this.state.input >= 0){
                this.setStateAfterClick()
            }else {alert("input must be between 0 and 5")}    
        }else {
            this.setStateAfterClick()
        }

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
      <input type={this.props.type} onChange={this.handleChange}></input>
      <br/>
      <button onClick={this.handleClick}>Next</button>
    </>  
    )}
}

const mapReduxStateToProps = state => state;

export default withRouter(connect(mapReduxStateToProps)(Form));
