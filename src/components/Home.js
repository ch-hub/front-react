import React, {useEffect, useState} from "react";
import Search from "./Search";
import Card from "./Card";
import Wallet from "./Wallet";
import Data from "./data";
import {Nav} from "react-bootstrap";
import {CSSTransition} from "react-transition-group";
import axios from "axios";

function Home() {
    let [tab, setTab] = useState(0);

    let [items, setItems] = useState(Data)

    return(
        <div>
            <Nav className="mt-5" variant="tabs" defaultActiveKey="shop">
                <Nav.Item>
                    <Nav.Link eventKey="shop" onClick={()=>{setTab(0)}}>상품</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="wallet" onClick={()=>{setTab(1)}}>지갑</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tab={tab} items={items}/>

        </div>
    )
}

function TabContent(props){

    const [products,setProducts] = useState();

    useEffect(() => {
        const fetchProducts = async () => {
            try{
                setProducts(null)
                const response = await axios.get('/app/products')
                setProducts(response.data.result)
            }catch(e){
                console.error(e)
            }
        }

        fetchProducts()

    },[]);

    if(!products) return null

    if(props.tab === 0){
        return (
            <div>
                <Search />
                <div className="container">
                    <div className="row">
                        {
                            products.map((a,i) => {
                                return <Card item={a} i={i} />
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