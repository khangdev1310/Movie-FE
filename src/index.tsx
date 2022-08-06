import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { AppErrorBoundary } from './App';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import configStore from './redux/store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const { store } = configStore();
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppErrorBoundary />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
