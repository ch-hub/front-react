import {Link} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";
import React from "react";


function Header(){
    return (
        <div>
            <Navbar className="justify-content-center">
                <Nav.Link> <Link to="/home">BNPL HOME</Link></Nav.Link>
            </Navbar>
            <Navbar className="justify-content-end">
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/join">Sign In</Nav.Link>
            </Navbar>
        </div>
    )
}

export default Header