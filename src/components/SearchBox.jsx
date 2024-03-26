import React from 'react';

import { createQueryObject } from '../helper/helper';

function SearchBox({ search, setSearch, setQuery }) {


   const searchHandler = () => {
      setQuery(query => createQueryObject(query, { search }))
   }

   return (
      <div className='mx-2.5 mb-10 flex items-center justify-center md:justify-start'>
         <input
            type="text"
            placeholder='Search...'
            value={search}
            onChange={e => setSearch(e.target.value.toLowerCase().trim())}
            className='mr-2.5 outline-none border-2 border-dashed border-primary p-2 w-60 text-[0.9rem] text-primary rounded-lg'
          />
         <button
         className='p-1.5 bg-primary text-white border-none rounded-lg cursor-pointer' 
         onClick={searchHandler}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-7 h-7">
               <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
         </button>
      </div>
   );
}

export default SearchBox;