import React from 'react';

const Nemo = (props) => {
  const [count, setCount] = React.useState(1);
  const nemo_count = Array.from({ length: count }, (v, i) => i);

  const addNemo = () => {
    setCount(count + 1);
  };

  const removeNemo = () => {
    count > 0 ? setCount(count - 1) : alert('네모없음');
  };

  return (
    <div className="App">
      {nemo_count.map((num, idx) => {
        return (
          <div
            key={idx}
            style={{
              width: '150px',
              height: '150px',
              backgroundColor: '#ddd',
              margin: '10px',
            }}
          >
            nemo
          </div>
        );
      })}

      <div>
        <button onClick={addNemo}>하나 추가</button>
        <button onClick={removeNemo}>하나 빼기</button>
      </div>
    </div>
  );
};

export default Nemo;
