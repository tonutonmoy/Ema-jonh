

import React from 'react';

import './Product.css'

const Product = ({data}) => {

    console.log(data)

    let {price,ratings,name,img,seller}=data
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


               <button>Add to card</button>

    
      </div>
    );
};

export default Product;