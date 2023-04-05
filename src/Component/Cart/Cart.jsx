import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import './Cart.css'



const Cart = ({cart,clearCart,children}) => {




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

          <button onClick={clearCart} className=' mt-3 btn btn-danger d-flex align-items-center gap-3 w-100 justify-content-center
'> 
             <span>Clear cart</span>
             <FontAwesomeIcon icon={faCoffee} ></FontAwesomeIcon>
             </button>

          {children}
             
        </div>
    );
};

export default Cart;



