import React, { useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import Wallet from './Wallet';
import Bnpl from './Bnpl';
import { useHistory } from 'react-router';

function MyInfo({ isLogin }) {
  let history = useHistory();
  let [tab, setTab] = useState(0);

  if (isLogin === false) {
    return history.push('/');
  }

  return (
    <Container>
      <Nav fill variant="tabs" className="m-3" defaultActiveKey="myInfo">
        <Nav.Item>
          <Nav.Link
            eventKey="myInfo"
            onClick={() => {
              setTab(0);
            }}
          >
            지갑
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="bnpl"
            onClick={() => {
              setTab(1);
            }}
          >
            BNPL
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="personalInfo"
            onClick={() => {
              setTab(2);
            }}
            disabled
          >
            개인정보
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </Container>
  );
}

function TabContent({ tab }) {
  if (tab === 0) {
    return <Wallet />;
  } else if (tab === 1) {
    return <Bnpl />;
  } else {
    return null;
  }
}

export default MyInfo;
