import React from 'react';
import { Link } from 'react-router-dom';
import { shortenText } from '../helper/helper';

function Card({ data }) {
   const { id, title, image, price } = data;
   return (
      <div className='w-[230px] m-2 p-5 flex flex-col items-start 
      justify-end bg-white border-2 border-dashed border-[#e2e2e2] rounded-2xl shadow-lg'>
         <img
            src={image}
            alt={title}
            className='w-[200px] h-[200px] p-2 mb-4 bg-white' />
         <h3 className='text-primary text-lg font-semibold'>
            {shortenText(title)}</h3>
         <p className='text-[#666] text-sm font-semibold mt-1.5  mb-4' >
            {price} </p>
         <div className='w-full flex justify-between items-center'>
            <Link
               className='text-2xl h-6 text-primary cursor-pointer'
               to={`/products/${id}`}>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
               </svg>
            </Link>
            <button className='flex justify-center items-center bg-primary text-white  border-none text-2xl h-8 w-8 p-0.5 rounded-lg cursor-pointer'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
               </svg>
            </button>
            <div className='hidden items-center'>
               <span className='w-5 text-center mx-2.5'></span>
            </div>
         </div>
      </div>
   );
}

export default Card;