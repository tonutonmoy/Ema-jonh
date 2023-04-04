import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
import { removeFromDb } from '../utilities/fakedb';

const Orders = () => {

   let cart= useLoaderData()

    let [newCart,seNewCart]=useState(cart);

    const deleteButton=(id)=>{


        let filter= newCart.filter(a=> a.id !== id) 

        seNewCart(filter)
        console.log(filter)

        removeFromDb(id)


        

    }

   


  
    return (
        <div className='shop-container'>

            <div className='review-container'>
             
             { newCart.map(a=> <ReviewItem product={a} key={a.id} deleteButton={deleteButton}> </ReviewItem>)}
                
            </div>

            <div className=''>
                <Cart cart={cart}></Cart>
            </div>
            
        </div>
    );
};

export default Orders;



