import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';

function Bnpl() {
  const id = useSelector((state) => state.login.id);
  let [info, setInfo] = useState({
    installment: 0,
    remains: 0,
    deal_at: '00:00:00',
  });

  const [isLate, setLate] = useState(false);

  useEffect(async () => {
    console.log('bnpl components');
    console.log('id : ', id);
    const res = await axios.get('/app/bnpl/' + id);
    console.log(res.data.result);
    setInfo(res.data.result);
  }, []);

  return (
    <Container>
      <Row className="mt-3">
        <h4>현재 BNPL</h4>
      </Row>
      <Row className="mt-3">
        <Col className="text-center">
          <Card>
            <Card.Body>남은 BNPL 횟수 : {info.installment}</Card.Body>
          </Card>
        </Col>
        <Col className="text-center">
          <Card>
            <Card.Body>
              남은 금액 : {info.remains.toLocaleString('ko-KR')}
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mt-3">
        <Col className="text-center">
          <Card>
            <Card.Body>
              {/*BNPL 성공!*/}
              다음 결제일자 :{info.deal_at.substr(0, 10)}
              <p></p>
              {info.deal_at.substr(11, 8)}
            </Card.Body>
          </Card>
        </Col>
        <Col />
      </Row>
      <Row className="mt-3">
        <h4>연체</h4>
      </Row>
      <Row className="mt-3">
        <Col className="text-center">
          <Card>
            <Card.Body>
              {0 !== 0 ? (
                <div>남은 연체료 : 2, 000</div>
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
      {/*<Row className="mt-3">*/}
      {/*  <Col className="text-center">*/}
      {/*    <Card>*/}
      {/*      <Card.Body>*/}
      {/*        /!*BNPL 성공!*!/*/}
      {/*        다음 연체일자 :{info.deal_at.substr(0, 10)}*/}
      {/*        <p></p>*/}
      {/*        {info.deal_at.substr(11, 8)}*/}
      {/*      </Card.Body>*/}
      {/*    </Card>*/}
      {/*  </Col>*/}
      {/*  <Col />*/}
      {/*</Row>*/}
    </Container>
  );
}

export default Bnpl;
