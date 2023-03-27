import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


import './Shop.css'
const Shop = () => {


    let [products,setProducts]=useState([]);



    useEffect(()=>{


        fetch('products.json')
        .then(a=> a.json())
        .then(a=> setProducts(a))

    },[])

    return (
        <div className='shop-container'>

            <div className="products-container">
                  
                  {
                    products.slice(0,10).map(a=> <Product data={a} key={a.id}></Product>)
                  }
            </div>

            <div className="card-container">
            t
            </div>
            
        </div>
    );
};

export default Shop;