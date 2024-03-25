import React, { useState } from 'react';

import { useProducts } from '../context/ProductContext';
import Card from '../components/Card';
import Loader from '../components/Loader';

function ProductsPage() {
   const products = useProducts();
   const [search, setSearch] = useState("")


   const searchHandler = () => {
      console.log(search);
   }
   return (
      <>
         <div>
            <input
               type="text"
               placeholder='Search...'
               value={search}
               onChange={e => setSearch(e.target.value.toLowerCase().trim())} />
            <button onClick={searchHandler}>
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
               </svg>
            </button>
         </div>

         <div className='container flex'>
            <div className="w-full flex flex-wrap justify-between">
               {!products.length && <Loader />}
               {
                  products.map(product =>
                     <Card key={product.id} data={product} />)
               }
            </div>
            <div>sidebar</div>
         </div>
      </>
   );
}

export default ProductsPage;