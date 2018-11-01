import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './configureStore';
import './index.css';
import Root from './root';
import * as serviceWorker from './serviceWorker';

const store = configureStore()

const renderApp = () =>
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById('root')
  )

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./root', renderApp)
}

renderApp();


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
