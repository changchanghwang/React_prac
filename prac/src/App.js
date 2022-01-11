import BucketList from './BucketList';
import styled from 'styled-components';
import React from 'react';
import Nemo from './Nemo';

function App() {
  const text = React.createRef();
  const L = ['영화관 가기', '매일 책읽기', '수영 배우기'];
  const [list, setList] = React.useState(L);
  const addBucket = () => {
    const newBucket = text.current.value;
    setList([...list, newBucket]);
  };
  return (
    <AppWrap>
      <Container>
        <Title>내 버킷리스트</Title>
        <Line />
        <BucketList list={list} />
      </Container>
      <InputDiv>
        <input ref={text} />
        <PlusButton onClick={addBucket}>추가</PlusButton>
      </InputDiv>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  background-color: #eee;
  height: 100vh;
  width: 100vw;
  flex-direction: column;
`;

const Container = styled.div`
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  margin: 20px auto;
  height: 50vh;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const Title = styled.h1`
  color: slateblue;
  text-align: center;
`;

const Line = styled.hr`
  margin: 16px 0px;
`;

const InputDiv = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  margin: auto;
  height: 1.8vh;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const PlusButton = styled.button`
  width: 50px;
  height: 30px;
`;

export default App;
