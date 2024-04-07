import React from 'react';

import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

import BasketCard from '../components/BasketCard';
import BasketSidebar from '../components/BasketSidebar';

function CheckoutPage() {
   const [state, dispatch] = useCart();

   const clickHandler = (type, data) => {
      dispatch({ type, payload: data })
   }

   return (
      <div className='container mx-auto px-6'>
         <Link to="/products" className='flex items-center text-white bg-blue-600 w-fit px-2 ml-4 text-lg font-semibold border-2 border-blue-600 shadow-md shadow-blue-400 dark:shadow-none rounded-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 mr-2">
               <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to shop
         </Link>
         {state.itemsCounter > 0 ?
            <div className='my-8 flex flex-col-reverse items-center md:items-start md:flex-row'>
               <BasketSidebar state={state} clickHandler={clickHandler} />
               <div className='w-full space-y-3 mb-3 rounded-2xl'>
                  {state.selectedItems.map((product) => (
                     <BasketCard key={product.id} data={product} clickHandler={clickHandler} />
                  ))}
               </div>
            </div>
            :
            <div className='w-fit h-32 mx-auto my-36 px-5 text-center leading-[128px] border-2 border-blue-600 border-dashed rounded-2xl text-lg font-semibold text-gray-500 shadow-lg
             md:text-xl md:leading-[128px] dark:text-gray-300 dark:shadow-none'>
              <p> Unfortunately there is no products!</p>
            </div>
         }
      </div>
   );
}

export default CheckoutPage;