import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const Progress = (props) => {
  const data = useSelector((state) => state.bucket.list);
  console.log(data);
  let count = 0;
  data.map((v, idx) => {
    if (v.completed) {
      return count++;
    }
  });
  const total = data.length;
  console.log(count);

  return (
    <Bar>
      <Fill width={(count / total) * 100 + '%'} />
      <Dot />
    </Bar>
  );
};

const Bar = styled.div`
  background: #eee;
  width: 100%;
  height: 20px;
  margin: 8px;
  display: flex;
  align-items: center;
  border-radius: 10px;
`;
const Fill = styled.div`
  background: orange;
  transition: 1s width;
  width: ${(props) => props.width};
  height: 100%;
  border-radius: 10px;
`;

const Dot = styled.div`
  width: 40px;
  height: 40px;
  background: #fff;
  border: 3px solid #673ab7;
  border-radius: 50%;
  margin: 0 0 0 -25px;
`;

export default Progress;
