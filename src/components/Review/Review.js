import React, { Component } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

class Review extends Component {

    componentDidMount(){
        this.getCurrentFeedback();
    }

    getCurrentFeedback = () => {
        console.log('in get current feedback')
    }

    sendFeedback = () => {
        console.log('feedback sending')
        Axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: this.props.inputReducer.feeling,
                understand: this.props.inputReducer.understand,
                support: this.props.inputReducer.support,
                comment: this.props.inputReducer.comment,
            }
                }).then(response => {
                    console.log('Response from server', response)
                    this.props.history.push('/thankYou') 
                }).catch(error => {
                    console.log('Error in post', error)         
        })
    }

  render() {
    return (
    <>
      <h1>Review Your Feedback</h1>
      <ul>
          <li>Feelings: {this.props.inputReducer.feeling}</li>
          <li>Understanding: {this.props.inputReducer.understand}</li>
          <li>Support: {this.props.inputReducer.support}</li>
          <li>Comments: {this.props.inputReducer.comment}</li>
      </ul>
      <br/>
      <button onClick={this.sendFeedback}>Submit</button>
    </>  
    )}
}

const mapReduxStateToProps = state => state;

export default withRouter(connect(mapReduxStateToProps)(Review));
