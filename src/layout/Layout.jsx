import React from 'react';
import { Link } from 'react-router-dom';

//icons
import github from "../../public/github.png"
import instagram from "../../public/instagram.png"
import linkedin from "../../public/linkedin.png"
//background
import bgwavy from '../../public/wave.svg'

import { useCart } from '../context/CartContext';

function Layout({ children }) {
   const [state] = useCart();

   return (
      <>
         <header className='container mx-auto flex  items-center justify-between text-white py-2.5 px-5 mb-14 md:mt-2 md:py-3'>
            <img src={bgwavy} className='absolute top-0 left-0 -z-10 w-full' />

            <Link to="/products" className='text-xl py-1.5 font-semibold mr-3 md:text-2xl'>Store</Link>

            <Link to="/checkout" className='relative bg-white p-0.5 rounded-lg shadow-md shadow-blue-300 dark:shadow-none'>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-blue-600">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
               </svg>
               {!!state.itemsCounter &&
                  <span className='inline-block absolute -top-1.5 -right-1.5 p-0 w-4 h-4 bg-slate-800 text-center text-xs text-white font-semibold rounded-full dark:bg-lime-400 dark:text-black'>{state.itemsCounter}</span>
               }
            </Link>
         </header>
         {children}
         <footer className='container mx-auto mt-3 py-3 bg-gray-800 text-center text-white flex flex-col items-center justify-evenly md:flex-row md:rounded-2xl md:mb-2'>
            <span>
               This project is just a work sample,<br /> that is made with React and Tailwind.
            </span>
            <div className='mt-3 md:mt-0'>
               <span className='font-bold'>Cantact me</span>
               <a href="http://github.com/thenoroozi"
                  target='_blank'
                  className='flex items-center text-sm font-bold px-1 py-0.5 mt-2'>
                  <img src={github} alt="github" className='w-5 mr-2 md:w-7' />
                  Thenoroozi
               </a>
               <a href="http://instagram.com/noroozidev"
                  target='_blank'
                  className='flex items-center text-sm font-bold px-1 py-0.5'>
                  <img src={instagram} alt="instagram" className='w-5 mr-2 md:w-7' />
                  Noroozidev
               </a>
               <a href="https://www.linkedin.com/in/hamed-noroozi-570465208"
                  target='_blank'
                  className='flex items-center text-sm font-bold px-1 py-0.5'>
                  <img src={linkedin} alt="linkedin" className='w-5 mr-2 md:w-7' />
                  Hamed Noroozi
               </a>
            </div>
         </footer>
      </>
   );
}

export default Layout;