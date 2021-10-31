import {Link} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import React from "react";


function Header(){
    return (
        <div>
            <div>
                <Link to="/home">bnpl 쇼핑몰</Link>
            </div>
            <Navbar className="justify-content-end">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/join">Sign In</Nav.Link>
            </Navbar>
            {/*<Nav className="justify-content-end">*/}
            {/*    <Nav.Item>*/}
            {/*        <Nav.Link > <Link to="/login">Login</Link> </Nav.Link>*/}
            {/*    </Nav.Item>*/}
            {/*    <Nav.Item>*/}
            {/*        <Nav.Link href="/join">Sign In</Nav.Link>*/}
            {/*    </Nav.Item>*/}
            {/*</Nav>*/}
        </div>
    )
}

export default Header