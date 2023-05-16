import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../utilities/fakedb';


import './Shop.css'
import { Link, useLoaderData } from 'react-router-dom';


const Shop = () => {

   const [cart,setCart]=useState([]);

    let [products,setProducts]=useState([]);

  

   const [currentPage,setCurrentPage]=useState(0);
   const [itemPerPage,setItemPerPage]=useState(10)


   const {totalProducts}  =useLoaderData();

   

   const totalPages = Math.ceil(totalProducts /itemPerPage)

   

   const pageNumber=[...Array(totalPages).keys()]

   console.log(pageNumber)





  

    useEffect(()=>{


        fetch(`http://localhost:5000/product?page=${currentPage}&total=${itemPerPage}`)
        .then(a=> a.json())
        .then(a=> setProducts(a))

    },[currentPage,itemPerPage]);



    useEffect(() => {
        let getShopping = getShoppingCart();
        const ids= Object.keys(getShopping)
       fetch('http://localhost:5000/productByIds',{

        method:'POST',
        headers:{
          'content-type': 'application/json'
      },
    body: JSON.stringify(ids)
    })
    .then(a=> a.json())
    .then(cardProducts=> {

      let saveCart=[];
      
      for (let id in getShopping) {
        let addProduct = cardProducts.find(a => a._id === id);
        if (addProduct) {
          let quantity = getShopping[id];
          addProduct.quantity = quantity;


          saveCart.push(addProduct)
          
        }
      }

       setCart(saveCart)

    })
       

      }, []);
      

      const Button=(product)=>{
// console.log(cart)
        // let newCart=[...cart,product]
    let newCart=[]

    const exists= cart.find(pd=> pd._id === product._id);
console.log(exists)
    if(!exists){
      product.quantity=1
      newCart=[...cart,product]

      console.log(newCart)
    }
    
    else{
      exists.quantity=exists.quantity + 1;
      const remaining= cart.filter(pd=> pd._id !== product._id)

      newCart=[...remaining,exists]
    }
    
    
    
    
        setCart(newCart)
          
       addToDb(product._id)
        }
       
        const clearCart=()=>{

          setCart([])
  
          deleteShoppingCart()
           
      }
  

      const options=[5,20,50]
   
      function handleSelectChange(event){

        setItemPerPage(parseInt(event.target.value))


        setCurrentPage(0)
      }

    return (
      <>
             
             <div className='shop-container'>
       
       <div className="products-container">
             
             {
               products.map(a=> <Product data={a} key={a._id} btn={Button}></Product>)
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

       {/* pagination */}


       <div className='pagination'>
        <p>current page: {currentPage}</p>

        {
          pageNumber.map(number=> <button className={currentPage=== number ? 'selected': ''} onClick={()=> setCurrentPage(number)} key={number}>{number}</button>)
        }

         
         

        <select value={itemPerPage} onChange={handleSelectChange}>


         
         {
          options.map(option=> 
            
            <option key={option} value={option}>

              {option}
            </option>
            )
         }

        </select>
         
        
       </div>
      </>
    );
};

export default Shop;