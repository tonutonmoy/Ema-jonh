import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import './ReviewItem.css'

const ReviewItem = ({product,deleteButton}) => {

    let {img,name,price,shipping,quantity,_id}=product;


   
    
    return (
        <div className='review-item row'>
            <div className='container-img-detail col-10'>
                <div> <img className='review-item-img' src={img} alt="" /> </div>
                <div>
                    <h6 className=' review-item-title'>{name}</h6>

                    <p className='review-item-p'>Price: <span className='review-item-span'>${price}</span> </p>
                    <p className='review-item-p'>ShippingCharge: <span className='review-item-span'>{quantity}</span></p>
                </div>
            </div>


            <div className='delete-button-container col-2' >
             
              <button onClick={()=> deleteButton(_id)} className='button-delete'>
                <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
              </button>
            </div>
        </div>
    );
};

export default ReviewItem;