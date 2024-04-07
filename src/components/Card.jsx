import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { productQuantity, shortenText } from '../helper/helper';
import { useCart } from '../context/CartContext';

function Card({ data }) {
   const { id, title, image, price } = data;
   const [state, dispatch] = useCart();

   const quantity = productQuantity(state, id);

   const clickHandler = (type) => {
      dispatch({ type, payload: data })
   }

   return (
      <div className='w-[230px] m-2 p-5 flex flex-col items-start justify-end bg-white border-2 border-dashed border-[#e2e2e2] rounded-2xl shadow-lg
      dark:bg-zinc-800'>
         <img
            src={image}
            alt={title}
            className='w-[200px] h-[200px] p-2 mb-4 bg-white rounded-lg' />
         <h3 className='text-blue-700 dark:text-blue-500 text-lg font-semibold'>  
            <Link to={`/products/${id}`}>{shortenText(title)}</Link>
            </h3>
         <p className='text-[#666] dark:text-gray-200 text-sm font-semibold mt-1.5  mb-4' >
            {price} </p>
         <div className='w-full flex justify-between items-center'>
            <Link
               className='text-2xl h-6 text-blue-600 dark:text-blue-500 cursor-pointer'
               to={`/products/${id}`}>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
               </svg>
            </Link>
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

               {!!quantity && (<span className='w-5 text-center mx-2.5 text-black dark:text-white'>{quantity}</span>)}

               {quantity === 0 ?
                  (<button onClick={() => clickHandler("ADD_ITEM")} className='btn'>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                     </svg>
                  </button>) :
                  (<button onClick={() => clickHandler("INCREASE")} className='btn'>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                     </svg>
                  </button>)}
            </div>
         </div>
      </div>
   );
}

export default Card;