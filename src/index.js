import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
// import store from './store/index';
import store from './store/index';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(                               //REDUX STEP = 4(wrapping the APP inside PROVIDER) 
            <Provider store={store}>       {/**REDUX STEP = 5 (adding a store prop and pointing it to our "store")  */}
                      <App />
            </Provider>);


//Next STEP is in APP.JS
