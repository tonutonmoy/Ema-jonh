import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'

const Orders = () => {

    const cart= useLoaderData()



  
    return (
        <div className='shop-container'>

            <div className='review-container'>
             
             { cart.map(a=> <ReviewItem product={a} key={a.id}> </ReviewItem>)}
                
            </div>

            <div className=''>
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Orders;



