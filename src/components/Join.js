import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Join() {
    let [id, setId] = useState('')
    let [pw, setPW] = useState('')
    let [name, setName] = useState('')
    let [phone, setPhone] = useState('')
    let [address, setAddress] = useState('')

    // login 버튼 클릭 이벤트
    const onClickJoin = () => {
        axios.post('/app/users',{
            id,
            pw,
            name,
            phone,
            address
        })
            .then( res => { console.log(res) })
            .catch( res => { console.log((res)) })
    }

    return(
        <div>
            <div>
                <h1>회원가입</h1>
            </div>
            <div>
                <label>ID :</label>
                <input name="id" value={id} onChange={e => setId(e.target.value)}/>
            </div>
            <div>
                <label>PW :</label>
                <input name="pw" value={pw} onChange={e => setPW(e.target.value)} />
            </div>
            <div>
                <label>NAME :</label>
                <input name="name" value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <div>
                <label>Phone :</label>
                <input name="phone" value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
            <div>
                <label>Address :</label>
                <input name="address" value={address} onChange={e => setAddress(e.target.value)}/>
            </div>
            <div>
                <button type='button' onClick={onClickJoin}>회원가입</button>
            </div>
        </div>
    )
}å


export default Join