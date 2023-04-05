import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../utilities/fakedb';


import './Shop.css'
import { Link } from 'react-router-dom';
const Shop = () => {


    let [products,setProducts]=useState([]);

   const [cart,setCart]=useState([]);




  

    useEffect(()=>{


        fetch('products.json')
        .then(a=> a.json())
        .then(a=> setProducts(a))

    },[]);



    useEffect(() => {
        let getShopping = getShoppingCart();
        let saveCart=[];
      
        for (let id in getShopping) {
          let addProduct = products.find(a => a.id === id);
          if (addProduct) {
            let quantity = getShopping[id];
            addProduct.quantity = quantity;


            saveCart.push(addProduct)
            
          }
        }

         setCart(saveCart)

      }, [products]);
      

      const Button=(product)=>{
// console.log(cart)
        // let newCart=[...cart,product]
    let newCart=[]

    const exists= cart.find(pd=> pd.id === product.id);
console.log(exists)
    if(!exists){
      product.quantity=1
      newCart=[...cart,product]

      console.log(newCart)
    }
    
    else{
      exists.quantity=exists.quantity + 1;
      const remaining= cart.filter(pd=> pd.id !== product.id)

      newCart=[...remaining,exists]
    }
    
    
    
    
        setCart(newCart)
          
       addToDb(product.id)
        }
       
        const clearCart=()=>{

          setCart([])
  
          deleteShoppingCart()
           
      }
  
   

    return (
        <div className='shop-container'>

            <div className="products-container">
                  
                  {
                    products.slice(0,10).map(a=> <Product data={a} key={a.id} btn={Button}></Product>)
                  }
            </div>

            <div >
                

                 <Cart clearCart={clearCart} cart={cart} >

                 <Link to='/orders'>

                    <button className='mt-3 btn btn-primary d-flex align-items-center gap-3 w-100 justify-content-center'> Review Order</button>
                  </Link>

                 </Cart>
            </div>
            
        </div>
    );
};

export default Shop;