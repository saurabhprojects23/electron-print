import React from 'react';
import Receipt from './receipt';

function App() {
  const handlePrint = () => {
    if (window.electronAPI) {
      window.electronAPI.printReceipt();
    } else {
      window.print();
    }
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handlePrint}>Print Receipt</button>
      <hr />
      <Receipt />
    </div>
  );
}

export default App;
