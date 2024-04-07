import React from 'react';
import { Link, useParams } from 'react-router-dom';

//icon
import star from '../../public/star.png'

import { useProductDetails } from '../context/ProductContext';
import { useCart } from '../context/CartContext';
import { productQuantity } from '../helper/helper';

import Loader from '../components/Loader';

function DetailsPage() {
   const { id } = useParams();
   const product = useProductDetails(+id);
   const { image, title, description, rating, price, category } = product;

   const [state, dispatch] = useCart();

   const quantity = productQuantity(state, +id);

   const clickHandler = (type) => {
      dispatch({ type, payload: product })
   }

   if (!product) {
      return (
         <Loader />
      )
   }
   return (
      <div className='flex flex-col mx-3 -mt-2 mb-10'>
         <Link to="/products" className='flex items-center w-fit px-2 ml-4 text-white bg-blue-600 text-lg font-semibold border-2 border-blue-600 shadow-md shadow-blue-400 dark:shadow-none rounded-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 mr-2">
               <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to shop
         </Link>
         <div className='flex flex-col md:flex-row items-center mt-5 space-y-4 md:items-start md:space-y-0 md:space-x-6'>

            <img src={image} alt={title} className='w-64 h-64 bg-white p-2 border-2 border-blue-600 border-dashed rounded-3xl md:w-80 md:h-80' />

            <div className='bg-white dark:bg-zinc-800 border-2 border-[#cccccc] border-dashed rounded-3xl p-4 space-y-2 dark:text-white md:space-y-4'>
               <div className='flex justify-between'>
                  <h3 className='font-bold text-blue-600 mr-1 dark:text-blue-500 md:text-xl'>{title}</h3>
                  <div className='flex items-center'>
                     <img src={star} className='w-6 mr-1' />
                  <span className='font-semibold'>{rating.rate}</span>
                  </div>
               </div>
               <p><span className='font-semibold text-blue-600 mr-2 dark:text-blue-400'>Description: </span>{description}</p>
               <p><span className='font-semibold text-blue-600 mr-2 dark:text-blue-400'>Category:</span>{category}</p>
               <div className='flex justify-between'>
                  <span className='font-semibold text-green-600 dark:text-lime-400'>{price} $</span>
                  <div className='flex items-center'>
                     {quantity === 1 &&
                        (<button onClick={() => clickHandler("REMOVE_ITEM")} className='btn'>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                           </svg>
                        </button>)}

                     {quantity > 1 &&
                        (<button onClick={() => clickHandler("DECREASE")} className='btn'>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                           </svg>
                        </button>)}

                     {!!quantity && (<span className='w-5 text-center mx-2.5'>{quantity}</span>)}

                     {quantity === 0 ?
                        (<button onClick={() => clickHandler("ADD_ITEM")} className='btn w-fit text-base px-2'>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 mr-1">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                           </svg> Buy
                        </button>) :
                        (<button onClick={() => clickHandler("INCREASE")} className='btn'>
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                           </svg>
                        </button>)}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default DetailsPage;