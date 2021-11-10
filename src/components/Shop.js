import React, { useEffect, useState } from 'react';
import Search from './Search';
import Card from './Card';
import Wallet from './Wallet';
import Data from './data';
import { Container, Nav, Row } from 'react-bootstrap';
import axios from 'axios';
import Carousels from './Carousels';

function Shop() {
  let [tab, setTab] = useState(0);

  let [items, setItems] = useState(Data);

  return (
    <Container>
      <Nav className="mt-5" variant="tabs" defaultActiveKey="shop">
        <Nav.Item>
          <Nav.Link
            eventKey="shop"
            onClick={() => {
              setTab(0);
            }}
          >
            상품
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="wallet"
            onClick={() => {
              setTab(1);
            }}
          >
            지갑
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} items={items} />
    </Container>
  );
}

function TabContent(props) {
  const [products, setProducts] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setProducts(null);
        const response = await axios.get('/app/products');
        setProducts(response.data.result);
      } catch (e) {
        console.error(e);
      }
    };

    fetchProducts();
  }, []);

  if (!products) return null;

  if (props.tab === 0) {
    return (
      <div>
        <Search />
        <Container>
          <Row>
            {products.map((a, i) => {
              return <Card item={a} i={i} key={i} />;
            })}
          </Row>
        </Container>
      </div>
    );
  } else {
    return <Wallet />;
  }
}
export default Shop;
