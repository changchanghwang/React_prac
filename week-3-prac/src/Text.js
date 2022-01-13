import React from 'react';

const Text = (props) => {
  const text = React.useRef(null);

  const hoverEvent = () => {
    text.current.style.color = 'blue';
  };

  React.useEffect(() => {
    text.current.addEventListener('mouseover', hoverEvent);
    return () => {
      text.current.removeEventListner('mouseover', hoverEvent);
    };
  }, [text]);
  return <h1 ref={text}>텍스트입니다</h1>;
};

export default Text;
