'use client';

import Navbar from './components/Navbar';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBKG from './components/ParticleBKG';
import { useEffect, useState } from 'react';

export default function Home() {
	const sections = ['experience', 'projects', 'contact'];
	const [scrolled, setScrolled] = useState(false);
	const [toolboxActive, setToolboxActive] = useState(true);
	const [projectInformationVisible, setProjectInfoVisible] = useState(false);
	const [emailSent, setEmailSent] = useState(false);

	const toggleToolbox = () => {
		setToolboxActive(!toolboxActive);
	};

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		var s = document.querySelectorAll('section');

		// Debounce the scroll event to improve performance
		clearTimeout(handleScroll.debounced);
		handleScroll.debounced = setTimeout(() => {
			s.forEach((z) => {
				const sectionTop = z.offsetTop;
				const sectionHeight = z.clientHeight;
				const sectionId = z.getAttribute('id');

				if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
					// Update the URL hash to the corresponding section id
					window.history.replaceState({}, '', `#${sectionId}`);
				}
			});
		}, 100); // Adjust the debounce time (in milliseconds) as needed

		// Check if the user has scrolled beyond a certain threshold (e.g., 100px)
		if (window.scrollY > 5) {
			setScrolled(true);
		} else {
			setScrolled(false);
		}
	};

	useEffect(() => {
		// Attach the scroll event listener when the component mounts
		window.addEventListener('scroll', handleScroll);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const scrollToTop = () => {
		// Check if the user is already at the top of the page
		if (window.scrollY === 0) {
			return;
		}

		// If not at the top, scroll to the top
		window.scrollTo(0, 0);
	};

	return (
		<>
			<Navbar
				scrolled={scrolled}
				sections={sections}
				scrollToTop={scrollToTop}
			/>
			<ParticlesBKG />
			<Header scrolled={scrolled} />
			<Experience
				toolboxActive={toolboxActive}
				toggleToolbox={toggleToolbox}
			/>
			<Projects
				projectInformationVisible={projectInformationVisible}
				setProjectInfoVisible={setProjectInfoVisible}
			/>
			<Contact
				emailSent={emailSent}
				setEmailSent={setEmailSent}
			/>
			<Footer />
		</>
	);
}
