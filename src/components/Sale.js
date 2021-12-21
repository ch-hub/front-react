import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import axios from 'axios';
import { useSelector } from 'react-redux';

const Sale = () => {
  const buyerId = useSelector((state) => state.login.id);

  const [imgFile, setImage] = useState(null);
  const [imgName, setImgName] = useState('blank.png');

  const [name, setName] = useState('example');
  const [price, setPrice] = useState(1);
  const [info, setInfo] = useState('example info');

  const [loading, setLoading] = useState(false);

  const imgChange = (e) => {
    setImage(e.target.files[0]);
  };
  const btnClick = async (e) => {
    e.preventDefault();

    const authObj = localStorage.getItem('auth');
    const { id, jwt } = JSON.parse(authObj);
    axios.defaults.headers.common['x-access-token'] = jwt;

    const formData = new FormData();
    formData.append('img', imgFile);

    const res = await axios.post('/app/image', formData);
    const resName = res.data.result;
    setImgName(resName);
    console.log(resName);

    const rest = await axios.post('/app/upload', {
      name: name,
      price: price,
      info: info,
      imageName: resName,
    });
    console.log(rest);
  };

  return (
    <Container className="text-center">
      <Row>1. NFT 생성</Row>
      <Row>
        <Col></Col>
        <Col>
          <input type="file" accept="image/*" onChange={imgChange} />
          <Image
            src={`http://localhost:3002/${imgName}`}
            thumbnail
            alt={'사진'}
          />
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Form onSubmit={btnClick}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>이름</Form.Label>
            <Form.Control
              type="text"
              placeholder="판매 물품 이름"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>가격</Form.Label>
            <Form.Control
              type="text"
              placeholder="가격"
              onChange={(e) => {
                setPrice(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>설명</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="판매할 물건에 대해 설명"
              onChange={(e) => {
                setInfo(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit" size="lg">
            제출
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default Sale;
