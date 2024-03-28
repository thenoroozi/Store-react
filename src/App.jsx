import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import ProductsPage from './pages/ProductsPage';
import DetailsPage from './pages/DetailsPage';
import CheckoutPage from './pages/CheckoutPage';
import PageNotFound from './pages/404';
import ProductsProvider from './context/ProductContext';
import CartProvider from './context/CartContext';
import Layout from './Layout/Layout';

function App() {
   return (
      <CartProvider>
         <ProductsProvider>
            <Layout>
               <Routes>
                  <Route index path='/' element={<Navigate to='/products' replace />} />
                  <Route path='/products' element={<ProductsPage />} />
                  <Route path='/products/:id' element={<DetailsPage />} />
                  <Route path='/checkout' element={<CheckoutPage />} />
                  <Route path='/*' element={<PageNotFound />} />
               </Routes>
            </Layout>
         </ProductsProvider>
      </CartProvider>
   );
}

export default App;