import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router} from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class ThankYou extends Component {
    handleClick = () => {
        console.log('button was clicked')
        this.props.dispatch({ type: 'RESET_REDUX_STATE' });
        this.props.history.push('/') 
    }
  render() {
    return (
      <Router>
        <div>
            Thank you, your form was submitted!
            <br/>
            <button onClick={this.handleClick}>Submit new feedback</button>
        </div>
      </Router>
    );
  }
}

const mapReduxStateToProps = state => state;

export default withRouter(connect(mapReduxStateToProps)(ThankYou));


