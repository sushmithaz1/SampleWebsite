import React, { useState } from 'react'
import PayPal from '../PayPal';
 const Payment=()=>{
    const [checkout, setCheckOut] = useState(false);

    return (
      <div className="App">
        {checkout ? (
          <PayPal />
        ) : (
          <button
            onClick={() => {
              setCheckOut(true);
            }}
          >
            Checkout
          </button>
        )}
      </div>
    );
    
}
export default Payment
