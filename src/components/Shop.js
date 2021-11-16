import React, { useEffect, useState } from 'react';
import Search from './Search';
import Card from './Card';
import Data from './data';
import { Container, Nav, Row } from 'react-bootstrap';
import axios from 'axios';
import Cart from './Cart';

function Shop() {
  let [tab, setTab] = useState(0);

  let [items, setItems] = useState(Data);

  return (
    <Container>
      <Nav fill variant="tabs" className="m-3" defaultActiveKey="shop">
        <Nav.Item>
          <Nav.Link
            eventKey="shop"
            onClick={() => {
              setTab(0);
            }}
          >
            구매
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="seller"
            onClick={() => {
              setTab(1);
            }}
            disabled
          >
            판매
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="cart"
            onClick={() => {
              setTab(2);
            }}
          >
            장바구니
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
  } else if (props.tab === 1) {
    // 판매자 페이지
    return <></>;
  } else {
    // 장바구니
    return <Cart />;
  }
}
export default Shop;
