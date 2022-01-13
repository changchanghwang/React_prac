import React from 'react';
import Text from './Text';

function App() {
  const circle = React.createRef(null);

  const hoverEvent = (e) => {
    circle.current.style.background = 'yellow';
  };
  const hoverEvent2 = (e) => {
    circle.current.style.background = 'green';
  };
  React.useEffect(() => {
    circle.current.addEventListener('mouseover', hoverEvent);
    return () => {
      circle.current.removeEventListener('mouseover', hoverEvent);
    };
  }, []);
  return (
    <div style={{ width: '100vw', height: '100vh', textAlign: 'center' }}>
      <Text />
      <div
        style={{
          margin: 'auto',
          width: '250px',
          height: '250px',
          background: 'green',
          borderRadius: '250px',
        }}
        ref={circle}
      ></div>
    </div>
  );
}

export default App;
