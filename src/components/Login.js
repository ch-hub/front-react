import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';


function Login() {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }

    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }

    // login 버튼 클릭 이벤트
    const onClickLogin = (e) => {
        e.preventDefault()
        console.log('click login')
        axios.post('/app/users',{
            id : inputId,
            pw : inputPw
        })
            .then( res => { console.log(res) })
            .catch( res => { console.log((res)) })
    }


    return(
        <div>
            <Container>
                <Row>
                    <Col className="text-center">
                        <h1>로그인</h1>
                    </Col>
                </Row>
                <Row>
                    <Col md="2"/>
                    <Col>
                        <Form onSubmit={onClickLogin}>
                            <Form.Group className="mb-3" controlId="formId">
                                <Form.Label>ID</Form.Label>
                                <Form.Control type="text" placeholder="Enter id" onChange={handleInputId}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" onChange={handleInputPw}/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                로그인
                            </Button>
                        </Form>
                    </Col>
                    <Col md="2"/>
                </Row>
                <Row>
                    <Col md="2" />
                    <Col>
                        <Button>회원가입</Button>
                    </Col>
                    <Col md="2" />
                </Row>
            </Container>

        </div>
    )
}

export default Login;