import React from "react";
import { Switch, Route, Link, Redirect} from "react-router-dom";
import Login from "./components/Login";
import Join from "./components/Join";
import Header from "./components/Header";
import Detail from "./components/Detail";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

function App(){

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
            <Route path="/checkout">
                <Checkout />
            </Route>
        </div>
    )
}
export default App