import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useProducts } from '../context/ProductContext';

import Card from '../components/Card';
import Loader from '../components/Loader';
import SearchBox from '../components/SearchBox';

import { filterProducts, getInitialQuary, searchProducts } from '../helper/helper';
import Sidebar from '../components/Sidebar';

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

   return (
      <>
         <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
         <div className='container flex flex-col-reverse md:flex-row'>
            <div className="w-full grid justify-center grid-col-1 md:grid-cols-2 lg:grid-cols-3">
               {!displayed.length && <Loader />}
               {
                  displayed.map(product =>
                     <Card key={product.id} data={product} />)
               }
            </div>
            <Sidebar setQuery={setQuery} query={query} />
         </div>
      </>
   );
}

export default ProductsPage;