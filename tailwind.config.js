/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	// Theme With Class
	darkMode: 'class',
	// Pathes
	content: ['./src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#512fdb',
				secondary: '#00FF00',
				tertiary: '#0000FF',
				darkMode: '#07050f',
			},
		
			container: {
				center: true,
				padding: '2rem',
			},
			screens: {
				sm: '480px',
				md: '768px',
				lg: '976px',
				xl: '1440px',
			},
			fontFamily: {
				abhaya: ['"Abhaya Libre"', 'serif'],
			},
		},
	},
	plugins: [],
};
