import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Bnpl() {
  const id = useSelector((state) => state.login.id);
  let [info, setInfo] = useState([0, 0, 0]);

  const [isLate, setLate] = useState(false);

  useEffect(async () => {
    console.log('bnpl components');
    console.log('id : ', id);
    const res = await axios.get('/app/bnpl/' + id);
    console.log(res);
  }, []);

  return (
    <Container>
      <Row className="mt-3">
        <h4>현재 BNPL</h4>
      </Row>
      <Row className="mt-3">
        <Col className="text-center">
          <Card>
            <Card.Body>남은 BNPL 횟수 : {info[0]}</Card.Body>
          </Card>
        </Col>
        <Col className="text-center">
          <Card>
            <Card.Body>남은 금액 : {info[1]}</Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <h4>연체</h4>
      </Row>
      <Row className="mt-3">
        <Col className="text-center">
          <Card>
            <Card.Body>
              {info[2] !== 0 ? (
                <div>남은 연체료 : {info[2]}</div>
              ) : (
                <div>연체료 없음</div>
              )}
            </Card.Body>
          </Card>
        </Col>
        <Col className="text-center mt-2">
          <Button size={'lg'} disabled={!isLate}>
            연체갚기
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Bnpl;
