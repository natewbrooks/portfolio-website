'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBKG from './components/ParticleBKG';

export default function Home() {
	const sections = ['experience', 'projects', 'contact'];
	const [scrolled, setScrolled] = useState(false);

	const handleScroll = () => {
		setScrolled(window.scrollY > 5);
	};

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [handleScroll]);

	const scrollToTop = () => {
		if (window.scrollY !== 0) {
			window.scrollTo(0, 0);
		}
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
			<Experience />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}
