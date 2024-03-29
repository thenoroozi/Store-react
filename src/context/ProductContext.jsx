import React, { createContext, useContext, useEffect, useState } from 'react';
import api from "../services/config";

const ProductContext = createContext();

function ProductsProvider({ children }) {
   const [products, setProduct] = useState([]);

   useEffect(() => {
      const fetchProducts = async () => {
         try {
            const response = await api.get("/products")
            setProduct(response)
         } catch (error) {
            console.log(error.message);
         }

      };

      fetchProducts();
   }, [])
   return (
      <ProductContext.Provider value={products}>
         {children}
      </ProductContext.Provider>
   );
}

const useProducts = () => {
   const products = useContext(ProductContext);
   return products;
}

export default ProductsProvider;
export { useProducts };