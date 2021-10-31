import React, {useState} from "react";
import Search from "./Search";
import Card from "./Card";
import Wallet from "./Wallet";
import Data from "./data";
import {Route} from "react-router-dom";
import Detail from "./Detail";

function Home() {
    let [tab, setTab] = useState(0);
    let [items, setItems] = useState(Data)

    return(
        <div>
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
        </div>
    )
}


export default Home