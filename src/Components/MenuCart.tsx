/** @format */

import React from 'react';
import Context from '../Context/Constext';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const MenuCart = ({
	setOpen,
}: {
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const { cartItems, setCartItems } = React.useContext(Context);
	const deleteItem = (id: number) => {
		console.log('id', id);
		const removeItem = cartItems.filter((item) => item.id !== id);
		setCartItems(removeItem);
	};
	console.log('cartItems', cartItems);

	return (
		<div className='fixed top-16 right-28 z-50 bg-gray-600  w-[250px] min-h-[100px] rounded-md'>
			<div className='p-4 '>
				<h1 className='text-white uppercase pb-3 border-b '>Cart</h1>
				{cartItems.length > 0 ? (
					cartItems.map((item) => (
						<div
							key={item.id}
							className='w-full'>
							<div className='flex items-center bg-slate-400 rounded-md p-2 my-2'>
								<div className='mr-4 w-10 h-10'>
									<img
										src={item.image}
										alt={item.title}
										className='w-full h-full object-fill'
									/>
								</div>
								<div className='w-full'>
									<p>{item.title}</p>
									<div className='flex justify-between'>
										<p>${item.price}</p>
										<span
											className='cursor-pointer text-red-500 '
											onClick={() => deleteItem(item.id)}>
											<X />{' '}
										</span>
									</div>
								</div>
							</div>
						</div>
					))
				) : (
					<p className='text-white py-6 mx-auto font-semibold '>
						Cart is Empty!
					</p>
				)}
				<Link
					to='/cart'
					onClick={() => setOpen(false)}
					className='cursor-pointer block text-center mt-2 text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5'>
					View Cart
				</Link>
			</div>
		</div>
	);
};

export default MenuCart;
