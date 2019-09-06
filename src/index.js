import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// redux
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/index';

const enhancers = compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
    <Provider store={createStore(reducers, enhancers)}>
        <App />
    </Provider>,
    document.getElementById('root')
);
