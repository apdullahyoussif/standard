/** @format */

import { motion } from 'framer-motion';
import { Heart, Star } from 'lucide-react';
import { ProductCardProps } from '../Helpers/definitions';
import React from 'react';
import Context from '../Context/Constext';

export function ProductCard({
	id,
	title,
	price,
	image,
	rating,
}: ProductCardProps) {
	const [heartSelected, setHeartSelected] = React.useState(false);
	const { cartItems, setCartItems } = React.useContext(Context);



	const addToCaer = (Product: ProductCardProps) => {
		const existingItem = cartItems.find((item) => item.id === Product.id);
		if (existingItem) return;

		setCartItems([...cartItems, { ...Product, quantity: 1 }]);
		
	};

	console.log('cartItems', cartItems);
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.8 }}
			className='dark:bg-gray-800 shadow-lg rounded-md'>
			<div className='relative'>
				<img
					src={image}
					alt={title}
					className='w-full h-48 object-cover rounded-t-lg'
				/>
				<button
					className={`absolute top-2 right-2 p-1.5 rounded-full shadow-sm ${
						heartSelected ? 'bg-red-500 text-white' : ' bg-white text-gray-600'
					}`}
					onClick={() => setHeartSelected(!heartSelected)}>
					<Heart className='h-5 w-5' />
				</button>
			</div>
			<div className='p-4'>
				<h3 className='text-lg font-semibold mb-2'>{title}</h3>
				<div className='flex items-center mb-2'>
					{[...Array(5)].map((_, i) => (
						<Star
							key={i}
							className={`h-4 w-4 ${
								i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
							}`}
						/>
					))}
				</div>
				<div className='flex items-center justify-between'>
					<span className='text-xl font-bold text-indigo-600'>{price} ج.م</span>
					<button
						className='bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700'
						onClick={() => addToCaer({ id, title, price, image, rating })}>
						أضف للسلة
					</button>
				</div>
			</div>
		</motion.div>
	);
}

export default ProductCard;
