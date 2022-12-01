import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';
//import {BrowserRouter} from 'react-router-dom'
import reportWebVitals from './reportWebVitals';
import './index.css';
import axios from "axios"
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container);
axios.defaults.baseURL = 'https://backend-scanneame-production.up.railway.app'

root.render(
  <React.StrictMode>
    <p>Prueba para ver si renderiza</p>
    <Provider store={store}>
    
      {/*<App />*/}
    
    </Provider>
  </React.StrictMode>
);



/*

<React.StrictMode>
    <p>Prueba para ver si renderiza</p>
    <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>

*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
