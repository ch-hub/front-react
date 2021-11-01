import React, {useEffect, useState} from "react";
import Search from "./Search";
import Card from "./Card";
import Wallet from "./Wallet";
import Data from "./data";
import {Nav} from "react-bootstrap";
import {CSSTransition} from "react-transition-group";

function Home() {
    let [sw, setSw] = useState(false);
    let [tab, setTab] = useState(0);

    let [items, setItems] = useState(Data)

    return(
        <div>
            <Nav className="mt-5" variant="tabs" defaultActiveKey="shop">
                <Nav.Item>
                    <Nav.Link eventKey="shop" onClick={()=>{ setSw(false); setTab(0)}}>상품</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="wallet" onClick={()=>{ setSw(true); setTab(1)}}>지갑</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab} items={items} setSw={setSw}/>

        </div>
    )
}

function TabContent(props){

    useEffect( () => {
        props.setSw(true);
    });

    if(props.tab === 0){
        return (
            <div>
                {/*<Search />*/}
                <div className="container">
                    <div className="row">
                        {
                            props.items.map((a,i) => {
                                return <Card item={props.items[i]} i={i} />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }else{
        return <Wallet />
    }
}
export default Home