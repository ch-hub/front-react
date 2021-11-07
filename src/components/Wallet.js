import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Container} from "react-bootstrap";


function Wallet(props) {

    let [account, setAccount] = useState('');
    let [balance, setBalance] = useState('0');
    let [id, setId] = useState('buyer')


    useEffect(() => {
        const getAccount = () => {
            axios.get('/app/wallet/'+id, {})
                .then( res => {
                    let {walletAd, walletBalance} = res.data.result;
                    // console.log(walletAd)
                    // console.log(walletBalance)
                    setAccount(walletAd)
                    setBalance(walletBalance)
                })
                .catch( res => {console.log(res)} )
        }
        getAccount()
    },[])

    return(
        <Container>
            <h2>지갑</h2>
            <Container>
                <p>주소 : {account}</p>
                <p>잔액 : {balance}</p>
            </Container>
            {/*<button onClick={getAccount}>지갑생성</button>*/}
        </Container>
    )

}

export default Wallet