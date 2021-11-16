import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import palette from '../lib/styles/palette';

const linkStyle = {
  textDecoration: 'none',
  color: palette.gray[5],
};

const navStyle = { background: palette.gray[3] };

function Navigations() {
  return (
    <Nav className="justify-content-center bg-dark variant-dark p-1">
      <Nav.Item>
        <Nav.Link>
          <Link to="/shop" style={linkStyle}>
            쇼핑몰
          </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link disabled>
          <Link to="/swap" className="text-dark text-decoration-line-through">
            SWAP
          </Link>
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link>
          <Link to="/myInfo" style={linkStyle}>
            내정보
          </Link>
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default Navigations;
