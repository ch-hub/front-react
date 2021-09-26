import './App.css';
import React from "react";
import Login from "./components/Login";
import {Link, Route, Switch} from "react-router-dom";
import Join from "./components/Join";



function App() {
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
            </Switch>

        </div>
    );
}

export default App;
