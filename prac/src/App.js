import BucketList from './BucketList';
import './style.css';
import styled from 'styled-components';

function App() {
  return (
    <div id="id" className="App">
      <Container>
        <Title>내 버킷리스트</Title>
        <Line />
        <BucketList list={['영화관 가기', '매일 책읽기', '수영 배우기']} />
      </Container>
    </div>
  );
}

const Container = styled.div`
  background-color: #fff;
  width: 50vw;
  max-width: 350px;
  margin: auto;
  height: 80vh;
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

export default App;
