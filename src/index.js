import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Provider houses our redux and stores our global state
// Global state is any state that resides within our reducers
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
// Bringing our reducer to pass into the store
import rootReducer from './reducers'
// Bringing in thunk to use as middleware
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}><App /></Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


