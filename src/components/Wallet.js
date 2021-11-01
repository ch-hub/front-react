import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Wallet(props) {

    let [account, setAccount] = useState('');
    let [balance, setBalance] = useState('0');
    let [id, setId] = useState('testtesst11')

    const getAccount = () => {
        axios.get('/app/wallet/'+id, {})
            .then( res => {
                console.log(res.data.result)
                setBalance(res.data.result)
            })
            // .catch( res => {console.log(res)} )
    }
    useEffect(() => {
        getAccount()
    })

    return(
        <div>
            <h2>지갑</h2>
            <div>
                주소 : {account}
                잔액 : {balance}
            </div>
            <div>

            </div>
            {/*<button onClick={getAccount}>지갑생성</button>*/}
        </div>
    )

}

export default Wallet