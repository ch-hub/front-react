import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

function Wallet(props) {
  let [account, setAccount] = useState('');
  let [balance, setBalance] = useState('0');
  let [id, setId] = useState('buyer');

  useEffect(() => {
    const getAccount = () => {
      axios
        .get('/app/wallet/' + id, {})
        .then((res) => {
          let { walletAd, walletBalance } = res.data.result;
          // console.log(walletAd)
          // console.log(walletBalance)
          setAccount(walletAd);
          setBalance(walletBalance);
        })
        .catch((res) => {
          console.log(res);
        });
    };
    getAccount();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="mt-2">
          <h2>클레이튼 & 토큰 관리</h2>
        </Col>
      </Row>
      <Row className="p-3">
        <Col>
          <p>주소 : {account}</p>
        </Col>
      </Row>
      <Row>
        <Col md={4} xs={6}>
          <Card className="text-center">
            <Card.Img variant="top" src="img/klay.svg" />
            <Card.Body>
              <Card.Title>Klay</Card.Title>
              <Card.Text>잔액 : {balance}</Card.Text>
              <Button variant="danger">충전하기</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={6}>
          <Card className="text-center">
            <Card.Img variant="top" src="img/hongikCoin.png" />
            <Card.Body>
              <Card.Title>Hongik Token</Card.Title>
              <Card.Text>잔액 : {balance}</Card.Text>
              <Button variant="danger">충전하기</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={6} />
      </Row>
      <Row className="p-3">
        <p>NFT</p>
      </Row>
      <Container></Container>
      {/*<button onClick={getAccount}>지갑생성</button>*/}
    </Container>
  );
}

export default Wallet;
