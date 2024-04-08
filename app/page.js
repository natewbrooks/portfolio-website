'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBKG from './components/ParticleBKG';
import { debounce } from 'lodash';

export default function Home() {
	const sections = ['experience', 'projects', 'contact'];

	const scrollToTop = () => {
		if (window.scrollY !== 0) {
			window.scrollTo(0, 0);
		}
	};

	return (
		<>
			<Navbar
				sections={sections}
				scrollToTop={scrollToTop}
			/>
			<ParticlesBKG />
			<Header />
			<Experience />
			<Projects />
			<Contact />
			<Footer />
		</>
	);
}
