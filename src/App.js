import React, {useState} from "react";
import { Switch, Route, Link, Redirect} from "react-router-dom";
import User from "./components/User";
import Wallet from "./components/Wallet";
import Shop from "./components/Home";
import {useHistory} from "react-router";
import Login from "./components/Login";
import Join from "./components/Join";
import {Button, Container, FormControl, InputGroup, Nav} from "react-bootstrap";
import Search from "./components/Search";
import Data from './components/data'
import Card from "./components/Card";
import Header from "./components/Header";
import Detail from "./components/Detail";
import Home from "./components/Home";
import Cart from "./components/Cart";

function App(){
    let [items, setItems] = useState(Data)

    return(
        <div className="App">
            <Route path="/">
                <Header />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/join">
                <Join />
            </Route>
            <Route path="/detail/:id">
                <Detail />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
        </div>
    )
}

function TabContent(props){
    if (props.tab === 0){
        return <Wallet />
    }else{
        return <Shop />
    }
}

export default App