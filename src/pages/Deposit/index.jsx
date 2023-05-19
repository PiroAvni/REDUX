import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import * as actionCreators from '../../action-creators/account';


const Deposit = () => {
  const account = useSelector(state => state.account)
  const dispatch = useDispatch()
  const { depositMoney } = bindActionCreators(actionCreators, dispatch);

  const handleDeposit = () => {
    depositMoney(1000)
  }

  return (
    <>
      <h2>
        Deposit Page <br />
        Balance: {account}
      </h2>
      <button onClick={handleDeposit}>Make Deposit</button>
    </>
  );
}

export default Deposit;