/** @format */
import React from 'react';
import { ProductCard } from '../Components/ProductCard';
import { FEATURED_PRODUCTS } from '../Helpers/Data';
const Products = () => {
	return (
		<section className='py-8'>
			<div className='max-w-7xl mx-auto'>
				<h2 className='text-3xl font-bold mb-8 text-center'>منتجات مميزة</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{FEATURED_PRODUCTS.map((product) => (
						<ProductCard
							key={product.id}
							title={product.title}
							price={product.price}
							image={product.image}
							rating={product.rating}
							id={product.id}
					
						/>
					))}
				</div>
			</div>
		</section>
	);
};
export default Products;
