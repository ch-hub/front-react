import {Button, Col, Container, FormControl, InputGroup} from "react-bootstrap";
import React from "react";

function Search(){
    return (
        <Container>
            <Col md="2"/>
            <Col md="auto">
                <InputGroup>
                    <FormControl
                        placeholder="검색할 것"
                        aria-label="검색문"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        검색
                    </Button>
                </InputGroup>
            </Col>
            <Col md="2"/>
        </Container>
    )
}

export default Search;