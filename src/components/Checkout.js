import React from 'react';
import axios from 'axios';
import { Button, Col, Container, Row } from 'react-bootstrap';

function Checkout() {
  return (
    <Container>
      <Row>
        <Col />
        <Col className="text-center">
          <Button>결제하기</Button>
        </Col>
        <Col />
      </Row>
    </Container>
  );
}

function buy(props) {
  const installment = 2;

  axios
    .post('/app/deal', {
      buyerId: 'buyer',
      toUserId: 'company',
      installment: installment,
    })
    .then((response) => {
      console.log(response);
    })
    .catch((e) => {
      console.error(e);
    });
}

export default Checkout;
