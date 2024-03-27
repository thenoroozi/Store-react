import React, { createContext, useContext, useReducer } from 'react';
import { sumProducts } from '../helper/helper';


const initialState = {
   selecetedItems: [],
   itemsCounter: 0,
   totalPrice: 0,
   checkout: false
}

const reducer = (state, action) => {
   switch (action.type) {
      case "ADD_ITEM":
         if (!state.selecetedItems.find(item => item.id === action.payload.id)) {
            state.selecetedItems.push({ ...action.payload, quantity: 1 })
         }
         return {
            ...state,
            ...sumProducts(state.selecetedItems),
            checkout:false,
         }
      case "ADD_ITEM":

         break;
      case "ADD_ITEM":

         break;

      default:
         throw new Error("Invalid Action");
   }
}

const CartContext = createContext();

function CartProvider({ children }) {
   const [state, dispatch] = useReducer(reducer, initialState)
   return (
      <CartContext.Provider value={{ state, dispatch }}>
         {children}
      </CartContext.Provider>
   );
}

const useCart = () => {
   const { state, dispatch } = useContext(CartContext)
   return [state, dispatch]
}

export default CartProvider;
export { useCart };