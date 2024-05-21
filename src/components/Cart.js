import React from 'react';
import { getItemsSelector } from '../store/slice/cartSlice';
import { useSelector } from 'react-redux';

const Cart = () => {
    const items = useSelector(getItemsSelector);
  const total = items.reduce((a, b) => a + b.price, 0);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col text-center'>
          <h2>Cart Manager</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col text-end'>
          <button className='btn btn-primary'>Total Balance:{total} </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
