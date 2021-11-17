import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Col, Container, Dropdown, Row, Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

function Checkout() {
  const { orders } = useSelector((state) => state.checkout);
  let history = useHistory();
  const [installment, setInstallment] = useState(0);

  useEffect(() => {
    // console.log(orders);
  }, []);

  const clickBuyBtn = () => {
    //
    // axios
    //   .post('/app/deal', {
    //     buyerId: 'buyer',
    //     toUserId: 'company',
    //     installment: installment,
    //   })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((e) => {
    //     console.error(e);
    //   });

    history.push('/myInfo');
  };
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
        <Col className="text-end">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="installment-period">
              {installment === 0 ? (
                <div>할부개월수 선택</div>
              ) : (
                <div>{installment} 개월</div>
              )}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={() => setInstallment(3)} eventKey="1">
                3개월
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setInstallment(6)} eventKey="2">
                6개월
              </Dropdown.Item>
              <Dropdown.Item onClick={() => setInstallment(12)} eventKey="3">
                12개월
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="text-start">
          <Button
            onClick={() => {
              clickBuyBtn();
            }}
          >
            결제하기
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Checkout;
