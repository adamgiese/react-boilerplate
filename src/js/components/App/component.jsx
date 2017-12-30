/* eslint-disable no-unused-vars */
import React from 'react';
/* eslint-ensable no-unused-vars */

const App = (props) => {
  const {
    hola,
    testAction,
  } = props;
  return (
    <div className='app'>
      { hola ?
        <h1 className='app-title'>Hola, {hola}!</h1>
        : <button onClick={() => testAction()}>Click Me</button>
      }
    </div>
  );
};

export default App;
