import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useProducts } from '../context/ProductContext';
import Card from '../components/Card';
import Loader from '../components/Loader';
import { createQueryObject, filterProducts, getInitialQuary, searchProducts } from '../helper/helper';

function ProductsPage() {
   const products = useProducts();

   const [search, setSearch] = useState("");
   const [displayed, setDisplayed] = useState([]);
   const [query, setQuery] = useState({});

   const [searchParams, setSearchParams] = useSearchParams();

   useEffect(() => {
      setDisplayed(products);
      setQuery(getInitialQuary(searchParams))
   }, [products])

   useEffect(() => {
      setSearchParams(query);
      setSearch(query.search || "")
      
      let finalProducts = searchProducts(products, query.search)
      finalProducts = filterProducts(finalProducts, query.category);
      setDisplayed(finalProducts)
   }, [query])

   const searchHandler = () => {
      setQuery(query => createQueryObject(query, { search }))
   }

   const categoryHandler = (event) => {
      const { tagName } = event.target;
      const category = event.target.innerText.toLowerCase();

      if (tagName !== "LI") return;
      setQuery(query => createQueryObject(query, { category }))
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
               {!displayed.length && <Loader />}
               {
                  displayed.map(product =>
                     <Card key={product.id} data={product} />)
               }
            </div>
            <div>
               <div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                  </svg>
                  <p>Categories</p>
               </div>
               <ul onClick={categoryHandler}>
                  <li>All</li>
                  <li>Electronics</li>
                  <li>Jewelery</li>
                  <li>Men's Clothing</li>
                  <li>Women's Clothing</li>
               </ul>
            </div>
         </div>
      </>
   );
}

export default ProductsPage;