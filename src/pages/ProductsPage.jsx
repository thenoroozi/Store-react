import React from 'react';

import { useProducts } from '../context/ProductContext';
import Card from '../components/Card';

function ProductsPage() {
   const products = useProducts();

   return (
      <div className="flex justify-between">
         <div className="w-full flex flex-wrap justify-between">
            {!products.length && <p>Loading... </p>}
            {
               products.map(product => 
               <Card key={product.id} data={product}/>)
            }
         </div>
         <div>Sidebar</div>
      </div>
   );
}

export default ProductsPage;