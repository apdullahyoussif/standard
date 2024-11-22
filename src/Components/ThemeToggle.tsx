/** @format */

import { useTheme } from 'next-themes';

const ThemeToggle: React.FC = () => {
	const { theme, setTheme } = useTheme();
	return (
		<div className='w-8 h-8 rounded-full dark:bg-white bg-primary flex items-center justify-center'>
			<button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
				{theme === 'dark' ? '🌙' : '☀️'}
			</button>
		</div>
	);
};

export default ThemeToggle;
