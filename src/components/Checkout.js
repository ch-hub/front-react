import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Button,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Row,
  Table,
} from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import styled from 'styled-components';

function Checkout() {
  const { orders } = useSelector((state) => state.checkout);
  let history = useHistory();

  const [installment, setInstallment] = useState(0);
  const [option, setOption] = useState(null);
  useEffect(() => {
    // console.log(orders);
  }, []);

  const clickBuyBtn = () => {
    axios
      .post('/app/deal/stable', {
        buyerId: 'buyer',
        productIdx: 1,
        installment: installment,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.error(e);
      });

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
                  <td>{a.price.toLocaleString('ko-KR')}</td>
                  <td>{a.qty}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Row>
      <Row className="text-center m-3">
        <Col>
          {installment !== 0 ? (
            <h4>
              한달동안 내야하는 금액 :{' '}
              {Math.ceil(orders[0].price / installment).toLocaleString('ko-KR')}
            </h4>
          ) : (
            <h4>할부기간을 설정하시오</h4>
          )}
        </Col>
      </Row>
      <Row>
        <Col className="text-end">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {installment === 0
                ? '할부날짜를 정하시오'
                : `${installment} 개월`}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {Array(11)
                .fill(0)
                .map((a, i) => {
                  return (
                    <Dropdown.Item
                      onClick={() => setInstallment(i + 2)}
                      eventKey={i}
                      key={i}
                    >
                      {i + 2} 개월
                    </Dropdown.Item>
                  );
                })}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col className="text-center">
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {option === null ? '구매수단' : option}
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item
                onClick={() => {
                  setOption('klay');
                }}
                key={0}
              >
                Hongik Token
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setOption('Hongik');
                }}
                key={1}
              >
                Klay
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
