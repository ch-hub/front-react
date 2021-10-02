import React, {useState} from "react";
import { Switch, Route, Link, Redirect} from "react-router-dom";
import User from "./components/User";
import Wallet from "./components/Wallet";
import Shop from "./components/Shop";
import {useHistory} from "react-router";
import Login from "./components/Login";
import Join from "./components/Join";

function App(){

    let history = useHistory();
    let [tab, setTab] = useState(0);

    return(
        <div className="App">
            <div>
                <Link to="/home">bnpl 쇼핑몰</Link>
            </div>
            <Switch>
                <Route exact path="/home">
                    <div>
                        <button onClick={() => history.push('/login')}>로그인</button>
                        <button onClick={() => history.push('/join')}>회원가입</button>
                    </div>
                    <div>
                        <button onClick={()=>setTab(0)}>지갑</button>
                        <button onClick={()=>setTab(1)}>쇼핑몰</button>
                        <TabContent tab={tab} />
                    </div>
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/join">
                    <Join />
                </Route>
            </Switch>
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