import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import React, { useEffect } from 'react';

const linkStyle = {
  textDecoration: 'none',
  color: 'white',
};

function Header({ id }) {
  useEffect(() => {
    console.log('header: ', id);
  }, [id]);

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
          {id !== '' ? (
            <>
              <Nav.Link>
                <Link to="/myInfo" style={linkStyle}>
                  {id} 님 환영합니다.
                </Link>
              </Nav.Link>
              <Nav.Link
                onClick={() => {
                  localStorage.removeItem('auth');
                  window.location.replace('/');
                }}
                style={linkStyle}
              >
                로그아웃
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link>
                <Link to="/login" style={linkStyle}>
                  로그인
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/join" style={linkStyle}>
                  회원가입
                </Link>
              </Nav.Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;
