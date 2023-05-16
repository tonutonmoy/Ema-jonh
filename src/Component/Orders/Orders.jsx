import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';

const Orders = () => {

   let oldCart= useLoaderData()

    let [cart,setCart]=useState(oldCart);

    const deleteButton=(id)=>{


        let filter= cart.filter(a=> a._id !== id) 

        setCart(filter)
        console.log(filter)

        removeFromDb(id)


        

    }

   
    const clearCart=()=>{

        setCart([])

        deleteShoppingCart()
         
    }

  
    return (
        <div className='shop-container'>

            <div className='review-container'>
             
             { cart.map(a=> <ReviewItem product={a} key={a._id} deleteButton={deleteButton}> </ReviewItem>)}
                
            </div>

            <div className=''>
                <Cart cart={cart} clearCart={clearCart}>

                <Link to='/checkOut'>

                    <button className='mt-3 btn btn-primary d-flex align-items-center gap-3 w-100 justify-content-center'> CheckOut</button>
                  </Link>


                </Cart>
            </div>
            
        </div>
    );
};

export default Orders;



