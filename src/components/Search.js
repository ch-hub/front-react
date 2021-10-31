import {Button, Container, FormControl, InputGroup} from "react-bootstrap";
import React from "react";


function Search(){
    return (
        <div>
            <Container>
                <InputGroup className="mb-3" xs lg="2">
                    <FormControl
                        placeholder="검색할 것"
                        aria-label="검색문"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        검색
                    </Button>
                </InputGroup>
            </Container>
        </div>
    )
}

export default Search;