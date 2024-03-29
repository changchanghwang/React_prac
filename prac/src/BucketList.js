// 리액트 패키지를 불러옵니다.
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BucketList = (props) => {
  const history = useHistory();
  const data = useSelector((state) => state.bucket.list);
  console.log('버킷리스트');
  return (
    <ListStyle>
      {data.map((list, index) => {
        return (
          <ItemStyle
            completed={list.completed}
            className="list_item"
            key={index}
            onClick={() => {
              history.push(`/detail/${index}`);
            }}
          >
            {list.text}
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 50vh;
  overflow-x: hidden;
  overflow-y: scroll;
  max-height: 50vh;
`;

const ItemStyle = styled.div`
  padding: 16px;
  margin: 8px;
  color: ${(props) => (props.completed ? '#fff' : '#333')};
  background-color: ${(props) => (props.completed ? '#673ab7' : 'aliceblue')};
`;

export default BucketList;
