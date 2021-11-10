import { Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import React from 'react';

function Header() {
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/">
          <img
            alt=""
            src="/img/hongikCoin.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          HONGIK BNPL
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Link href="/login">로그인</Nav.Link>
          <Nav.Link href="/join">회원가입</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
