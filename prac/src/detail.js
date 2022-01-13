// 리액트 패키지를 불러옵니다.
import React from 'react';
import styled from 'styled-components';

const Detail = (props) => {
  return <ItemStyle>상세페이지입니다.</ItemStyle>;
};

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: aliceblue;
`;

export default Detail;
