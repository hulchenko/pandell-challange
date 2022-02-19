import React, { useState } from 'react';
function App() {
  const [array, setArray] = useState([]);
  const min = 1;
  const max = 10000;
  const initArray = [];
  const randomAmount = () => {
    for (let i = min; i < max; i++) {
      // console.log(i);
      initArray.push(i);
      setArray(initArray);
    }
    // console.log(initArray);
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>1 - 10,000</h1>
      <div style={{ width: '100%', textAlign: 'center' }}>
        <button onClick={() => randomAmount()}>GENERATE</button>
      </div>
      <div
        style={{
          display: 'grid',
          maxHeight: '80vh',
          overflow: 'auto',
          margin: '1rem 5rem',
          gridTemplateColumns:
            'auto auto auto auto auto auto auto auto auto auto',
        }}
      >
        {array.map((item) => {
          return (
            <li key={item} style={{ listStyle: 'none' }}>
              {item}
            </li>
          );
        })}
      </div>
    </div>
  );
}

export default App;
