import React from 'react';

import { shortenText } from '../helper/helper';

function BasketCard({ data, clickHandler }) {
   const { id, title, image, quantity } = data;


   return (
      <div key={id} className='p-4 flex items-center justify-between border-2 border-dashed rounded-2xl space-y-2 md:space-y-0 md:flex-row '>
         <img src={image} className='w-16 h-16 rounded-lg' />
         <p className='text-black dark:text-white'>{shortenText(title)}</p>
         <div className='flex'>
            {quantity === 1 &&
               (<button onClick={() => clickHandler("REMOVE_ITEM", data)} className='btn'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                     <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
               </button>)}

            {quantity > 1 &&
               (<button onClick={() => clickHandler("DECREASE", data)} className='btn'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                  </svg>
               </button>)}

            {!!quantity && (<span className='w-5 text-center mx-2.5 dark:text-white'>{quantity}</span>)}

            <button onClick={() => clickHandler("INCREASE", data)} className='btn'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
               </svg>
            </button>
         </div>
      </div>
   );
}

export default BasketCard;