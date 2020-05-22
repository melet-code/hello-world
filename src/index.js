import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const baseUrl = process.env.REACT_APP_API_URL;
export const login= ( user ) => {
  return fetch ( baseUrl + '/login' , {
    method:'POST',
    headers:{ 
      'Accept':'application/json',
      'Content-Type':'application/json'
    },    
    body:JSON.stringify(user)
  }).then (res => res.json())
}