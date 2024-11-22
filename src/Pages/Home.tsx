/** @format */

import React, { lazy, Suspense } from 'react';

const SliderHome = lazy(() => import('../Components/Slider'));
const ProductList = lazy(() => import('./Products'));

const Home: React.FC = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<div className='container '>
				<SliderHome />
				<ProductList />
			</div>
		</Suspense>
	);
};

export default Home;
