import React, { useState } from 'react';
import { useSelector } from 'react-redux'

const Home = () => {
  const account = useSelector(state => state.account)
console.log('Home:',account)
  return (
    <h2>
      Home Page <br />
      Balance: {account}
    </h2>
  );
}

export default Home;