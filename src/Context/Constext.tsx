/** @format */

import { createContext } from 'react';
 import {CartContextType} from '../Helpers/definitions';
  const CartContext = createContext<CartContextType>({
    cartItems: [],
    setCartItems: () => {},
  })

export default CartContext;
