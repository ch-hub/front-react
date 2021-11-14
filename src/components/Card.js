import React from 'react';
import { useHistory } from 'react-router';
import { Col, Container, Row } from 'react-bootstrap';

function Card({ item, i }) {
  let history = useHistory();

  return (
    <Container
      className="col-md-4"
      onClick={() => {
        history.push('/detail/' + (i + 1));
      }}
    >
      <Row>
        <img
          alt={''}
          src={'https://codingapple1.github.io/shop/shoes' + (i + 1) + '.jpg'}
          width="100%"
        />
      </Row>
      <Row>
        <Col className="text-center">{item.name}</Col>
      </Row>
      <Row>
        <Col className="text-center">{item.price} won</Col>
      </Row>
    </Container>
  );
}

export default Card;
