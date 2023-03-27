import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';


import './Shop.css'
const Shop = () => {


    let [products,setProducts]=useState([]);

   const [cart,setCart]=useState([]);

     const Btn=(a)=>{

     let newCart=[...cart,a]

     setCart(newCart)

     console.log(cart)
       
     }

    useEffect(()=>{


        fetch('products.json')
        .then(a=> a.json())
        .then(a=> setProducts(a))

    },[])

    return (
        <div className='shop-container'>

            <div className="products-container">
                  
                  {
                    products.slice(0,10).map(a=> <Product data={a} key={a.id} btn={Btn}></Product>)
                  }
            </div>

            <div >
                

                 <Cart cart={cart} ></Cart>
            </div>
            
        </div>
    );
};

export default Shop;