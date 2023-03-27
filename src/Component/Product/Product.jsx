

import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

const Product = (props) => {

    // console.log(props)

    let {price,ratings,name,img,seller}=props.data;

    let btn=props.btn
    return (
    

       <div className='card'>
            <div className='div-img'><img src={img} alt="" /></div>

            <div className='product-info'>
                <h1> {name} </h1>
                
                <h3>Price: ${price}</h3>
       
                </div>

                <div className='p-container' >
                    <p>Manufacturer:{seller} </p>
                    <p>Rating: {ratings} </p>
                </div>


               <button onClick={()=> btn(props.data)}>Add to card 
               <FontAwesomeIcon icon={faShoppingCart} />
               </button>

    
      </div>
    );
};

export default Product;