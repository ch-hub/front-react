import React from 'react';
import { useHistory } from 'react-router';
import { Card, Container } from 'react-bootstrap';

function MyCard({ item, i }) {
  let history = useHistory();

  return (
    <Container
      className="col-md-4 text-center"
      onClick={() => {
        history.push('/detail/' + (i + 1));
      }}
    >
      <Card className="m-1 mt-3">
        <Card.Img
          variant="top"
          src={`img/${item.name}.jpg`}
          height="230px"
          width="230px"
        />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
          <Card.Text>{item.price.toLocaleString('ko-KR')} 원</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default MyCard;
