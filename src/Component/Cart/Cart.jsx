import React from 'react';

import './Cart.css'



const Cart = ({cart}) => {


  let total=0;
let shipping=0
  let tax=0;

  for(let i of cart){

    console.log(i)

    total = total + i.price;

    shipping= shipping + i.shipping;

    tax= tax + (i.price * 7 / 100);
  }

let grandTotal= total+ shipping + tax


    
    console.log(tax)
    return (
        <div className='cart-container'>

            <h1 className='Order-summary'>Order Summary</h1>

            <p>Selected Items: {cart.length} </p>

           

            <p>Total Price: {total} </p>

          

          <p>  Total Shipping Charge: {shipping} </p>

          <p>Tax: {tax.toFixed(2)} </p>

          <h3>Grand Total: {grandTotal.toFixed(2)} </h3>
        </div>
    );
};

export default Cart;



