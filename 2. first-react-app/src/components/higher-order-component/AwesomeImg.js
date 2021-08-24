import React from 'react';

export default function ({ src, width = '300px', height = '200px' }) {
  return (
    <div
      className='AwesomeImg'
      style={{
        width: `${width}`,
        height: `${height}`,
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '5px',
      }}
    ></div>
  );
}
