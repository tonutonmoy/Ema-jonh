import React, { useEffect } from 'react';

import './Cart.css'



const Cart = ({cart}) => {




  let total=0;
  let shipping=0
    let tax=0;
    let quantity=0;
  
    for(let i of cart){
  
  
      
        // i.quantity= i.quantity || 1;
     
  
     
  
      total = total + i.price * i.quantity;
  
      shipping= shipping + i.shipping;
  
      
  
      quantity = quantity + i.quantity ; 
    }
  
    tax=  total * 7 /100;
  let grandTotal= total+ shipping + tax;
  
  




    
  
    return (
        <div className='cart-container'>

            <h1 className='Order-summary'>Order Summary</h1>

            <p>Selected Items: {quantity} </p>

           

            <p>Total Price: {total} </p>

          

          <p>  Total Shipping Charge: {shipping} </p>

          <p>Tax: {tax.toFixed(2)} </p>

          <h3>Grand Total: {grandTotal.toFixed(2)} </h3>
        </div>
    );
};

export default Cart;



