import React, { useState } from 'react';
import axios from 'axios';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { saveInput } from '../modules/login';
import { useHistory } from 'react-router';

function Login() {
  let dispatch = useDispatch();
  let history = useHistory();

  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  let tempJwt;

  // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  // login 버튼 클릭 이벤트
  const onClickLogin = (e) => {
    e.preventDefault();
    axios
      .post('/app/login', {
        id: inputId,
        pw: inputPw,
      })
      .then((res) => {
        // console.log(res)
        const { jwt } = res.data.result;
        tempJwt = jwt;
        axios.defaults.headers.common['x-access-token'] = tempJwt;
        dispatch(saveInput({ id: inputId, pw: inputPw }));
        localStorage.setItem(
          'auth',
          JSON.stringify({ id: inputId, pw: inputPw, jwt: jwt }),
        );
        history.push('/');
      })
      .catch((res) => {
        console.log(res);
      });
  };

  const apiTest = (e) => {
    e.preventDefault();
    console.log('click testButton');
    // console.log(tempJwt)
    axios.defaults.headers.common['x-access-token'] = tempJwt;
    console.log(axios.defaults.headers.common);
    axios.get(`/app/wallet/${inputId}`).then((res) => {
      console.log(res);
    });
  };

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>로그인</h1>
        </Col>
      </Row>
      <Row>
        <Col md="2" />
        <Col>
          <Form onSubmit={onClickLogin}>
            <Form.Group className="mb-3" controlId="formId">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter id"
                onChange={handleInputId}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={handleInputPw}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              로그인
            </Button>
          </Form>
        </Col>
        <Col md="2" />
      </Row>
      <Row>
        <Col md="2" />
        <Col>
          <Button>회원가입</Button>
          <Button onClick={apiTest}>Test</Button>
        </Col>
        <Col md="2" />
      </Row>
      <Row>
        <Col>{inputId}</Col>
        <Col>{inputPw}</Col>
        <Col>{tempJwt}</Col>
      </Row>
    </Container>
  );
}

export default Login;
