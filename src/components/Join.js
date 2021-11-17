import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';

function Join() {
  let [id, setId] = useState('');
  let [pw, setPW] = useState('');
  let [pwCheck, setPWCheck] = useState('');
  let [pwError, setPWError] = useState(false);

  let [name, setName] = useState('');
  let [phone, setPhone] = useState('');
  let [address, setAddress] = useState('');

  const onChangePasswordCheck = (e) => {
    //비밀번호를 입력할때마다 password 를 검증하는 함수
    setPWError(e.target.value !== pw);
    setPWCheck(e.target.value);
  };
  const handleInputId = (e) => {
    setId(e.target.value);
  };
  const handleInputPw = (e) => {
    setPW(e.target.value);
  };
  const handleInputName = (e) => {
    setName(e.target.value);
  };
  const handleInputPhone = (e) => {
    setPhone(e.target.value);
  };
  const handleInputAddr = (e) => {
    setAddress(e.target.value);
  };
  const onClickJoin = (e) => {
    e.preventDefault();
    axios
      .post('/app/users', {
        id,
        pw,
        name,
        phone,
        address,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <h1>회원가입</h1>
        </Col>
      </Row>
      <Row>
        <Col md="2" />
        <Col>
          <Form onSubmit={onClickJoin}>
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
            <Form.Group className="mb-3" controlId="formId">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter id"
                onChange={handleInputName}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formId">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter id"
                onChange={handleInputPhone}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formId">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter id"
                onChange={handleInputAddr}
              />
            </Form.Group>
            <Button variant="primary" type="submit" size={'lg'}>
              회원가입
            </Button>
          </Form>
        </Col>
        <Col md="2" />
      </Row>
    </Container>
  );
}

export default Join;
