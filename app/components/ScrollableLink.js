import React from 'react';

export default function ScrollableLink({ section }) {
	const handleItemClick = () => {
		const targetElement = document.getElementById(section);

		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<li
			key={section}
			className='text-lg text-zinc-200 md:text-xl hover:text-zinc-400 hover:cursor-pointer'
			onClick={handleItemClick}>
			{section}
		</li>
	);
}
