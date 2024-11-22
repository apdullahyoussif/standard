/** @format */

import React from 'react';
import AppRoutes from './Routers';
import { Navbar } from './Components/Navbar';
import Provider from './Context/ContextProvider';

const App: React.FC = () => {
	return (
		<>
			<Provider>
				<Navbar />
				<AppRoutes />
			</Provider>
		</>
	);
};

export default App;
