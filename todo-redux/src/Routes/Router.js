import React from 'react';
// 1. react-router-dom을 사용하기 위해서 아래 API들을 import 합니다.
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, DetailScreen } from '../screen';
import { ROUTE_DETAIL_ID, ROUTE_HOME } from './const';
// 2. Router 라는 함수를 만들고 아래와 같이 작성합니다.
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={ROUTE_HOME} element={<Home />} />
        <Route path={ROUTE_DETAIL_ID} element={<DetailScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };
