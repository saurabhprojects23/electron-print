import React from 'react';

function Receipt() {
  return (
    <div className="receipt" style={{justifyContent:"center"}}>
      <h2>Receipt Preview</h2>
      <p>Item A - $10</p>
      <p>Item B - $15</p>
      <p><strong>Total: $25</strong></p>
    </div>
  );
}

export default Receipt;
