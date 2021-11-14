import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Join from './components/Join';
import Header from './components/Header';
import Detail from './components/Detail';
import Shop from './components/Shop';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Carousels from './components/Carousels';
import Navigations from './components/Navigations';
import { useDispatch, useSelector } from 'react-redux';
import { saveInput } from './modules/login';
import axios from 'axios';
import { useHistory } from 'react-router';

function App() {
  let { id, pw } = useSelector((state) => state.login);
  let dispatch = useDispatch();
  let history = useHistory();

  useEffect(() => {
    // 인증
    const temp = localStorage.getItem('auth');
    if (temp) {
      dispatch(saveInput(JSON.parse(temp)));
    }

    // 클래이튼 가격
    axios.get('/app/klay').then((res) => {
      const value = JSON.parse(res.data.result);
      console.log(value);
      console.log('hi');
    });
  }, []);

  return (
    <div className="App">
      <Header id={id} />
      <Switch>
        <Route exact path="/">
          <Navigations />
          <Carousels />
        </Route>
        <Route path="/shop">
          <Navigations />
          <Shop />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/join">
          <Join />
        </Route>
        <Route path="/detail/:id">
          <Navigations />
          <Detail />
        </Route>
        <Route path="/cart">
          <Navigations />
          <Cart />
        </Route>
        <Route path="/checkout">
          <Navigations />
          <Checkout />
        </Route>
        <Route path="/myInfo">
          <Navigations />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
