import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//Redux
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const inputReducer = (state = {}, action) => {
    if(action.type === "ADD_FEELING"){
        return {...state, feeling: action.payload};
    } else if (action.type === "ADD_UNDERSTAND"){
        return{...state, understand: action.payload}
    } else if (action.type === "ADD_SUPPORT"){
        return{...state, support: action.payload}
    } else if (action.type === "ADD_COMMENT"){
        return{...state, comment: action.payload}
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        inputReducer,
    })
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
