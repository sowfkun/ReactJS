import React, { useContext } from 'react';

import { NumberContext } from './NumberContext';

export default function () {
  const context = useContext(NumberContext);
  return (
    <div>
      <h2>{context.number}</h2>
      <button onClick={context.updateNumber}>update Number</button>
    </div>
  );
}
