import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import { SkeletonTheme } from 'react-loading-skeleton';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </SkeletonTheme>
    </Provider>
  </React.StrictMode>
);
