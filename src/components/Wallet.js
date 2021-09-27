import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Wallet(props) {

    let [account, setAccount] = useState('0');
    let [deposit, setDeposit] = useState('0');
    let [id, setId] = useState('0')

    const getAccount = () => {
        axios.get('/app/test/'+id, {})
            .then( res => {
                console.log(res)
                setAccount(res)
            })
            .catch( res => {console.log(res)} )
    }

    return(
        <div>
            <h2>지갑</h2>
            <div>
                주소 : {account}
                {/*{getAccount()}*/}
            </div>
            {/*<button onClick={makeAccount}>지갑생성</button>*/}
        </div>
    )

}

export default Wallet