import '../App.css';
import React, {useState} from "react";
import Login from "./Login";
import {Link, Route, Switch} from "react-router-dom";
import Join from "./Join";
import Wallet from "./Wallet";
import Test from "./Test";



function App() {

    let [address, setAddress] = useState('a')

    return (
        <div>
            <Switch>
                <Route path="/home">
                    <div>매인 페이지</div>
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/join">
                    <Join />
                </Route>
                <Route path="/items">
                    {/*<Item  /*/}
                </Route>
                <Route path="/wallet">
                    <Wallet address={address} />
                </Route>
                <Route path="/text">
                    <Test />
                </Route>
            </Switch>

        </div>
    );
}

export default App;
