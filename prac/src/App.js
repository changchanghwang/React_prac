import BucketList from './BucketList';
import './style.css';
import styled from 'styled-components';

function App() {
  return (
    <div id="id" className="App">
      <div className="container">
        <h1 className="title">내 버킷리스트</h1>
        <hr className="line" />
        <BucketList list={['영화관 가기', '매일 책읽기', '수영 배우기']} />
      </div>
    </div>
  );
}

export default App;
