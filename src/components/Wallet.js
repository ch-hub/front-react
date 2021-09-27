import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Wallet(props) {

    let [account, setAccount] = useState('initial');

    const makeAccount = () => {
        axios.post('/app/test', {})
            .then( res => {console.log(res)} )
            .catch( res => {console.log(res)} )
    }

    return(
        <div>
            <h2>지갑</h2>
            <div>
                주소 : {account}
            </div>
            <button onClick={makeAccount}>지갑생성</button>
        </div>
    )

}

export default Wallet