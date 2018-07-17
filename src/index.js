import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import style from "./style.css"
import Router from './router';
import reducers from './reducers';

const Index = () => {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
        <Provider store={store}>
            <Router />
        </Provider>
    )
}

ReactDOM.render(<Index />, document.getElementById("index"));