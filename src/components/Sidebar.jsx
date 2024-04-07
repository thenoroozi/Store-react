import React from 'react';

import { createQueryObject } from '../helper/helper';

import { categories } from '../constants/list';

function Sidebar({ query, setQuery }) {

   const categoryHandler = (event) => {
      const { tagName } = event.target;
      const category = event.target.innerText.toLowerCase();

      if (tagName !== "LI") return;
      setQuery(query => createQueryObject(query, { category }))
   }

   return (
      <div className='w-fit h-fit mx-auto mb-3 p-5  bg-white border-2 border-dashed border-blue-500 rounded-2xl
      md:w-52 md:ml-7 md:m-2 dark:bg-zinc-800 dark:text-white'>
         <div className='w-52 flex items-center mb-2 text-blue-700 font-semibold dark:text-blue-400'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            <p className='ml-2'>Categories</p>
         </div>
         <ul className='pl-1 grid grid-cols-2 md:block' onClick={categoryHandler}>
            {categories.map(category => (
               <li
                  className={`${query.category === category.type.toLowerCase() ? "selected" : null}
                   p-1 cursor-pointer text-nowrap hover:text-blue-600`}
                  key={category.id}>{category.type}</li>
            ))}
         </ul>
      </div>
   );
}

export default Sidebar;