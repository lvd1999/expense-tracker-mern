import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <li className="minus">
        {transactions.text} <span>-$400</span>
        <button className="delete-btn">x</button>
      </li>
    </div>
  );
};
