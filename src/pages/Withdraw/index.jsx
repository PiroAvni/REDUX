import React, { useState } from 'react';

const Withdraw = () => {
  const [balance, setBalance] = useState(0);

  const handleClick = () => setBalance(p => p - 10)


  return (
    <>
      <h2>
        Withdraw Page <br />
        Balance: {balance}
      </h2>
      <button onClick={handleClick}>Withdraw Money</button>
    </>
  );
}

export default Withdraw;