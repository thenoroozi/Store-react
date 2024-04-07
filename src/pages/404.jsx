import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
   return (
      <div>
         <Link to="/products" className='flex items-center w-fit px-2 ml-4 text-white bg-blue-600 text-lg font-semibold border-2 border-blue-600 shadow-md shadow-blue-400 dark:shadow-none rounded-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5 mr-2">
               <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to shop
         </Link>

         <div className='w-fit h-32 mx-auto my-36 px-5 text-center leading-[128px] border-2 border-blue-600 border-dashed rounded-2xl text-lg font-semibold text-gray-500 
             md:text-xl md:leading-[128px] dark:text-gray-300'>
            <p>404 page not found !</p>
         </div>
      </div>
   );
}

export default PageNotFound;