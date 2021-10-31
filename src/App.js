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

function App(){

    let [tab, setTab] = useState(0);
    let [items, setItems] = useState(Data)


    return(
        <div className="App">
            <Route path="/">
                <Header />
            </Route>
            <Route path="/home">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" onClick={()=>{setTab(0)}}>상품</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" onClick={()=>{setTab(1)}}>내지갑</a>
                    </li>
                </ul>
                {
                    tab == 0
                    ?
                        <div>
                            <Search />
                            <div className="container">
                                <div className="row">
                                    {
                                        items.map((a,i) => {
                                            return <Card item={items[i]} i={i} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    :
                        <Wallet />
                }
            </Route>
            <Route path="/detail">
                <Detail />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/join">
                <Join />
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