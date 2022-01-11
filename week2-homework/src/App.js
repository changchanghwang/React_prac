import React from 'react';
import styled from 'styled-components';

function App() {
  const n = '황창환';
  const text = React.createRef();
  const [name, setName] = React.useState(n);
  const changeName = () => {
    const newName = text.current.value;
    setName(newName);
  };
  return (
    <AppWrap>
      <div>
        <Me>
          나는 <Name>{name}</Name>에 대해서
        </Me>
        <Me>얼마나 알고 있을까?</Me>
        <Me>
          <input placeholder="내 이름" ref={text} />
        </Me>
        <Me>
          <button onClick={changeName}>시작하기</button>
        </Me>
      </div>
    </AppWrap>
  );
}

const AppWrap = styled.div`
  border: 1px solid black;
  width: 300px;
  height: 50rem;
  margin: auto;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Me = styled.div`
  font-size: 20px;
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const Name = styled.div`
  background-color: yellow;
  border: 1px solid black;
  border-radius: 20%;
  text-align: center;
  margin: 0px 20px;
`;

export default App;
