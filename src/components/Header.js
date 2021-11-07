import {Link} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";
import React from "react";


function Header(){
    return (
        <Container>
            <Container>
                <Navbar.Brand href="/home">HONGIK BNPL</Navbar.Brand>
            </Container>
            <Navbar className="justify-content-end">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/join">Sign In</Nav.Link>
            </Navbar>
            <Navbar className="justify-content-end">
                <Nav.Link href="/myinfo">내정보</Nav.Link>
                <Nav.Link href="/cart">장바구니</Nav.Link>
            </Navbar>
        </Container>
    )
}

export default Header