/** @format */

import { useState } from 'react';
import { CartItem } from '../Helpers/definitions';
import CartContext from './Constext';

const CartProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	return (
		<CartContext.Provider value={{ cartItems, setCartItems }}>
			{children}
		</CartContext.Provider>
	);
};

export default CartProvider;
