import styled, { keyframes } from 'styled-components';

function App() {
  return (
    <div className="App">
      <Box />
    </div>
  );
}

const boxAnimation = keyframes`
  0%{
    border-radius:0%;
    top:20px;
  }
  50%{
    border-radius:50%;
    top: 800px;
  }
  100%{
    border-radius:0%;
    top:500px;
    left:400px;
  }
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background: green;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 20px;
  animation: ${boxAnimation} 2s 1s infinite linear alternate;
`;

export default App;
