/** @format */

import React from 'react';
import { IMAGES } from '../Helpers/Data';
import { motion } from 'framer-motion';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';

const Slider: React.FC = () => {
	const [index, setIndex] = React.useState(0);

	React.useEffect(() => {
		const interval = setInterval(() => {
			setIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	const handleNext = () => {
		if (index === IMAGES.length - 1) return;
		setIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
	};
	const handlePrev = () => {
		if (index === 0) return;
		setIndex((prevIndex) => (prevIndex - 1 + IMAGES.length) % IMAGES.length);
	};
	return (
		<main className='overflow-hidden w-full h-[400px]'>
			<div className='flex justify-center items-center w-full h-full relative'>
				<motion.div
					initial={{ opacity: 0.4, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 1 }}
					key={IMAGES[index].id}
					className='w-full h-full'>
					<img
						src={IMAGES[index].img}
						alt={IMAGES[index].title}
						className='w-full h-full object-cover rounded-lg'
					/>
				</motion.div>
				<button
					className='absolute top-1/2 -translate-y-1/2 right-3 h-8 w-8 rounded-full flex justify-center items-center bg-primary'
					onClick={handleNext}>
					<ArrowBigRight />
				</button>
				<button
					className='absolute top-1/2 -translate-y-1/2 left-3 h-8 w-8 rounded-full flex justify-center items-center bg-primary'
					onClick={handlePrev}>
					<ArrowBigLeft />
				</button>
			</div>
		</main>
	);
};

export default Slider;
