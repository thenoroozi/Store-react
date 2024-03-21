import React from 'react';

import { useProducts } from '../context/ProductContext';

function ProductsPage() {
   const products =useProducts();
   console.log(products);
   return (
      <div>
         products
      </div>
   );
}

export default ProductsPage;