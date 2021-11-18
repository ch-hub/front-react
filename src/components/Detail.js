import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Button, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { initCheckout } from '../modules/checkout';

function Detail(props) {
  let dispatch = useDispatch();
  let history = useHistory();
  let { id } = useParams();
  const [product, setProduct] = useState({ name: '' });
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setProduct(null);
        const response = await axios.get('/app/products/' + id);
        setProduct(response.data.result[0]);
      } catch (e) {
        console.error(e);
      }
    };

    fetchProduct();
  }, []);

  const onClickCheckout = () => {
    dispatch(
      initCheckout({
        productIdx: product.productIdx,
        name: product.name,
        price: product.price,
        qty: 1,
      }),
    );

    history.push('/checkout');
  };

  const onClickCart = () => {
    let cart = localStorage.getItem('cart');
    cart = JSON.parse(cart);

    if (!cart) {
      //새로 생성
      cart = {
        productIdx: product.productIdx,
        name: product.name,
        price: product.price,
        qty: 1,
      };
    } else {
      //추가
      cart = cart.concat({
        productIdx: product.productIdx,
        name: product.name,
        price: product.price,
        qty: 1,
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    history.push('/cart');
  };

  if (!product) return null;

  console.log(product);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={`/img/${product.name}.jpg`}
            width="100%"
            alt="로딩중입니다."
          />
        </div>
        <div className="col-md-6 text-center">
          <h2 className="pt-5">{product.name}</h2>
          <p>가격 : {product.price.toLocaleString('ko-KR')}</p>
          <p>설명 : {product.info}</p>
          <Button
            onClick={() => {
              onClickCheckout();
            }}
            className="btn btn-primary"
            size="lg"
          >
            주문하기
          </Button>
          <p></p>
          <Button
            onClick={() => {
              history.goBack();
            }}
            className="btn btn-secondary"
            size="lg"
          >
            뒤로가기
          </Button>
        </div>
      </div>
      <Row className="text-center">
        <Col md={6} />
        <Col md={3}></Col>
        <Col></Col>
      </Row>
    </div>
  );
}

export default Detail;
