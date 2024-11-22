/** @format */

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
const Cart = React.lazy(() => import('../Components/Cart'));

const AppRoutes: React.FC = () => (
	<>
		<Routes>
			<Route
				path='/'
				element={<Home />}
			/>
			<Route
				path='cart'
				element={<Cart />}
			/>
		</Routes>
	</>
);

export default AppRoutes;
