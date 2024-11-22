/** @format */

import React from 'react';
import { ShoppingCart, Search, Menu } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';
import Context from '../Context/Constext';
import MenuCart from './MenuCart';
export const Navbar: React.FC = function () {
	const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
	const [cartOpen, setCartOpen] = React.useState<boolean>(false);
	const { cartItems} = React.useContext(Context);

	return (
		<nav className='dark:bg-darkMode shadow-sm sticky top-0 z-50'>
			<div className='max-w-7xl mx-auto container'>
				<div className='flex items-center justify-between h-16'>
					<div className='flex items-center'>
						<Menu
							className='h-6 w-6 cursor-pointer md:hidden'
							aria-label='Toggle menu'
							onClick={() => setMenuOpen(!menuOpen)}
						/>
						<Link
							to='/'
							className='text-xl font-bold text-indigo-600 cursor-pointer'>
							متجر
						</Link>
					</div>
					<div className='hidden md:flex flex-1 justify-center px-8'>
						<div className='relative w-full max-w-lg flex items-center'>
							<input
								type='text'
								placeholder='ابحث عن منتجات...'
								className='flex-grow px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'
							/>
							<Search className='h-5 w-5 text-gray-400 ml-2' />
						</div>
					</div>
					<div className='flex items-center space-x-4'>
						<ThemeToggle />
						<button
							className='relative'
							onClick={() => setCartOpen(!cartOpen)}>
							<ShoppingCart className='h-6 w-6 ' />
							<span className='absolute -top-2 -right-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center'>
								{cartItems.length}
							</span>
						</button>
						{cartOpen && <MenuCart setOpen={setCartOpen} />}

						<button className='bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700'>
							تسجيل الدخول
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};
