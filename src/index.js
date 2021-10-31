import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux";
import {createBrowserHistory} from "history";
import createStore from "./createStore";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const history = createBrowserHistory();
const store = createStore(history);

ReactDOM.render(
      <Provider store={store}>
          <BrowserRouter history={history}>
              <App />
          </BrowserRouter>
      </Provider>
    , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
