import React from 'react';
import { Carousel } from 'react-bootstrap';

const Carousels = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img className="d-block w-100" src="img/page1.jpg" alt="First slide" />
        <Carousel.Caption>
          <h3>BNPL BApp 에 오신것을 환경합니다.</h3>
          <p>감사합니다.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="img/page2.jpg" alt="Second slide" />

        <Carousel.Caption>
          <h3>HONGIK SWAP</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src="img/page3.jpg" alt="Third slide" />

        <Carousel.Caption>
          <h3>BE MY PARTERS!</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Carousels;
