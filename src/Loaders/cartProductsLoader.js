import { getShoppingCart } from "../Component/utilities/fakedb";

const cartProductsLoader = async ()=>{

    const storedCart = getShoppingCart();

    const ids= Object.keys(storedCart)

    const loadedProducts= await fetch('http://localhost:5000/productByIds',{

    method:'POST',
    headers:{
        'content-type': 'application/json'
    },
    body: JSON.stringify(ids)
    });

    const products = await loadedProducts.json();

    console.log(products)



  

   const savedCart=[];

    for(const id in storedCart){

        const addedProducts= products.find(pd=> pd._id === id);


        if(addedProducts){
            const quantity= storedCart[id];

            addedProducts.quantity= quantity;


            savedCart.push(addedProducts)
        }
    }
   

    return savedCart



}

export default cartProductsLoader;