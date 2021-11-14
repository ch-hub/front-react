import React, { useEffect } from 'react';
import axios from 'axios';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Checkout() {
  const { orders } = useSelector((state) => state.checkout);

  useEffect(() => {
    console.log(orders);
  }, []);
  return (
    <Container>
      <Row>
        <Table striped bordered hover variant="light">
          <thead>
            <tr>
              <th>#</th>
              <th>상품명</th>
              <th>가격</th>
              <th>수량</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            {orders.map((a, i) => {
              return (
                <tr key={i}>
                  <td>{i}</td>
                  <td>{a.name}</td>
                  <td>{a.price}</td>
                  <td>{a.qty}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
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
