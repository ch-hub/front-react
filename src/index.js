import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from "react-router-dom";

import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";



function reducer2(state = true, action){
    if(action.type === 'close'){
        let copy = state
        copy = false
        return copy
    }else{
        return state
    }
}

let basic = [
    {id:0, name:'멋진신발',qty:2},
    {id:1, name:'멋진신발2',qty:3},
    {id:2, name:'멋진신발3',qty:4},
]

function reducer(state = basic, action){
    if(action.type === 'increase'){
        let copy = [...state]
        copy[0].qty++
        return copy;
    } else if(action.type === 'decrease'){
        let copy = [...state]
        copy[0].qty--;
        return copy;
    } else {
        return state
    }
}

const store = createStore(combineReducers({reducer,reducer2}));

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
    , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
