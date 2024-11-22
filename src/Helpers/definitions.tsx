/** @format */

import { Dispatch, SetStateAction } from 'react';

export interface ProductCardProps {
	id: number;
	title: string;
	price: number;
	image: string;
	rating: number;
}

export interface CartItem extends ProductCardProps {
	quantity: number;
}
export interface CartContextType {
	cartItems: CartItem[];
	setCartItems: Dispatch<SetStateAction<CartItem[]>>;
}
