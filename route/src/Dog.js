import React from 'react';
import { useHistory } from 'react-router-dom';

const Dog = (props) => {
  console.log(props);
  const history = useHistory();
  return (
    <div
      onClick={() => {
        history.push('/');
      }}
    >
      개
    </div>
  );
};

export default Dog;
