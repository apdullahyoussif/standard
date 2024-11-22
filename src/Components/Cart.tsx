/** @format */

import React from 'react';
import Context from '../Context/Constext';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const Cart = () => {
	const { cartItems, setCartItems } = React.useContext(Context);
	console.log('cartItems', cartItems);
	const deleteItem = (id: number) => {
		const removeItem = cartItems.filter((item) => item.id !== id);
		setCartItems(removeItem);
	};
	const increseItem = (id: number) => {
		const allItems = cartItems.map((item) => {
			if (item.id === id) {
				return { ...item, quantity: item.quantity + 1 };
			}
			return item;
		});
		setCartItems(allItems);
	};
	const decreaseItem = (id: number) => {
		const updatedCart = cartItems.map((item) =>
			item.id === id && item.quantity > 1
				? { ...item, quantity: item.quantity - 1 }
				: item
		);
		setCartItems(updatedCart);
	};
	const total = cartItems.reduce(
		(pre, curr) => pre + curr.price * curr.quantity,
		0
	);
	return (
		<div className='rounded-md container'>
			<div className='p-4  bg-gray-600  '>
				<h1>Cart</h1>
				{cartItems.length > 0
					? cartItems.map((item) => (
							<div
								key={item.id}
								className=' p-2 bg-slate-400 my-2 rounded-md'>
								<div className='flex items-center rounded-md'>
									<div className='mr-4 w-10 h-10'>
										<img
											src={item.image}
											alt={item.title}
											className='w-full h-full object-cover'
										/>
									</div>
									<div className='flex-1 pr-3'>
										<div className='flex justify-between'>
											<p>{item.title}</p>

											<p>الكمية: {item.quantity}</p>
										</div>
										<div className='flex justify-between'>
											<p>{item.price}</p>
											<p>الاجمالي: {item.price * item.quantity}</p>
										</div>
									</div>
								</div>
								<div className='flex justify-between'>
									<div className='flex items-center justify-center '>
										<button
											className='w-8 h-4 select-none rounded-full text-white bg-orange-800  mx-2  flex items-center justify-center'
											onClick={() => increseItem(item.id)}>
											<span>+</span>
										</button>
										<p className=' select-none text-center '>{item.quantity}</p>
										<button
											className='w-8 h-4 select-none rounded-full text-white bg-orange-800 mx-2  flex items-center justify-center '
											onClick={() => decreaseItem(item.id)}>
											<span>-</span>
										</button>
									</div>
									<div>
										<button
											className='cursor-pointer text-white bg-orange-800 rounded-full w-8 h-8 flex items-center justify-center'
											onClick={() => deleteItem(item.id)}>
											<X className='w-4 h-4' />
										</button>
									</div>
								</div>
							</div>
					  ))
					: 'Cart is Empty'}
			</div>
			<div className='p-4 w-[200px] bg-gray-400 mt-7 '>
				<h1>الاجمالي: {total}</h1>
				<Link to='/checkout'>Checkout</Link>
			</div>
		</div>
	);
};

export default Cart;
