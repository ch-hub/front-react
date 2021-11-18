import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { saveInput } from '../modules/login';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { startModal } from '../modules/info';

function Wallet(props) {
  let history = useHistory();
  let dispatch = useDispatch();
  const buyerId = useSelector((state) => state.login.id);

  let [account, setAccount] = useState('');
  let [klay, setKlay] = useState(0);
  let [stable, setStable] = useState(0);

  let [nftList, setNftList] = useState([]);
  let [nft, setNft] = useState(null);
  // let nftList;

  const [isLoading, setLoading] = useState(true);

  let date = '2021-11-16T09:37:43.000Z';

  useEffect(() => {
    const getAccount = () => {
      const authObj = localStorage.getItem('auth');
      const { id, jwt } = JSON.parse(authObj);
      axios.defaults.headers.common['x-access-token'] = jwt;
      axios
        .get('/app/wallet/' + id, {})
        .then((res) => {
          const { walletAd, walletBalance2, stableBalance, productIdxList } =
            res.data.result;

          console.log(res.data.result);

          setKlay(walletBalance2);
          setStable(stableBalance);
          setAccount(walletAd);

          productIdxList.forEach((id) => {
            axios.get('/app/products/' + id).then((response) => {
              const { name, info } = response.data.result[0];
              setNft({ name, info });
            });
          });
        })
        .catch((res) => {
          console.log(res);
        });
    };
    try {
      getAccount();
    } catch (e) {
      console.log(e);
      dispatch(
        startModal({
          text: '로그인 후 이용할수 있습니다',
          color: 'lightgoldenrodyellow',
        }),
      );
      history.goBack();
    }
  }, []);

  useEffect(() => {
    if (nft !== null) {
      const nextNftList = nftList.concat(nft);
      setNftList(nextNftList);
      setLoading(false);
    }
  }, [nft]);

  const getKlay = () => {
    const amount = 1;

    axios
      .post('/app/klay/', { buyerId: buyerId, amount: amount })
      .then((res) => {
        console.log('getKlay');
        console.log(res);
      });
  };

  const getStable = () => {
    const amount = 100000;

    axios
      .post('/app/stable/', { buyerId: buyerId, amount: amount })
      .then((res) => {
        console.log('getStable');
        console.log(res);
      });
  };

  return (
    <Container>
      <Row>
        <Col className="mt-2">
          <h2>클레이튼 & 토큰 관리</h2>
        </Col>
      </Row>
      <Row className="p-3">
        <Col>
          <h5>주소 : {account}</h5>
        </Col>
      </Row>
      <Row>
        <Col md={4} xs={6}>
          <Card className="text-center">
            <Card.Img variant="top" src="img/klay.svg" />
            <Card.Body>
              <Card.Title>Klay</Card.Title>
              <Card.Text>잔액 : {klay}</Card.Text>
              <Button
                variant="danger"
                onClick={() => {
                  getKlay();
                }}
              >
                충전하기
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={6}>
          <Card className="text-center">
            <Card.Img variant="top" src="img/hongikCoin.png" />
            <Card.Body>
              <Card.Title>Hongik Token</Card.Title>
              <Card.Text>잔액 : {stable.toLocaleString('ko-KR')}원</Card.Text>
              <Button
                variant="danger"
                onClick={() => {
                  getStable();
                }}
              >
                충전하기
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} xs={6} />
      </Row>
      <Row className="pt-5">
        <Col>
          <h4>구매한 NFT 상품</h4>
        </Col>
      </Row>
      <Row className="mb-5">
        {isLoading === false ? (
          nftList.map((a, i) => {
            return (
              <Col key={i} md={4} xs={6}>
                <Card className="text-center">
                  <Card.Img
                    variant="top"
                    src={`/img/${a.name}.jpg`}
                    height="200px"
                    width="200px"
                  />
                  <Card.Body>
                    <Card.Title>{a.name}</Card.Title>
                    <Card.Text>{a.info}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <div>loading</div>
        )}
      </Row>
    </Container>
  );
}

export default Wallet;
