import {
  Button,
  Col,
  Container,
  FormControl,
  InputGroup,
  Row,
} from 'react-bootstrap';
import React, { useState } from 'react';

function Search() {
  const [input, setInput] = useState('sample');

  return (
    <Container>
      <Row>
        <Col md="2" />
        <Col md="8">
          <InputGroup
            onChange={(e) => {
              setInput(e.target.value);
            }}
          >
            <FormControl
              placeholder="상품 검색"
              aria-label="검색문"
              aria-describedby="basic-addon2"
            />
            <Button
              onClick={(e) => {
                console.log(input);
              }}
              variant="outline-secondary"
              id="search-btn"
            >
              검색
            </Button>
          </InputGroup>
        </Col>
        <Col md="2" />
      </Row>
    </Container>
  );
}

export default Search;
