import React, { Children } from 'react';

function Card(props) {
  const { imgUrl, children } = props;
  return (
    <div className='Card'>
      <img src={imgUrl} />
      <div>{children}</div>
    </div>
  );
}

export default Card;
