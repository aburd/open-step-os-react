import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Desktop from './Desktop';
import * as serviceWorker from './serviceWorker';
import './styles/main.scss'

ReactDOM.render(
  <React.StrictMode>
    <Desktop />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
