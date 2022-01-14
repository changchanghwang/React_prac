// 리액트 패키지를 불러옵니다.
import React from 'react';
import styled from 'styled-components';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeBucket } from './redux/modules/bucket';

const Detail = (props) => {
  const history = useHistory();
  const { index } = useParams();
  const data = useSelector((state) => state.bucket.list);
  const dispatch = useDispatch();
  const deleteB = () => {
    dispatch(removeBucket(index));
    history.goBack();
  };
  return (
    <>
      <ItemStyle>{data[index]}</ItemStyle>
      <button onClick={deleteB}>삭제</button>
    </>
  );
};

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  background-color: aliceblue;
`;

export default Detail;
