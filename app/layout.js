import './globals.css';
import { Acme } from 'next/font/google';

const acme = Acme({ subsets: ['latin'], weight: ['400'] });

export const metadata = {
	title: 'natewbrooks',
	description: 'portfolio',
	icons: {
		icon: '/nwb-favicon.svg',
	},
};

export default function RootLayout({ children }) {
	return (
		<html
			lang='en'
			style={{ scrollBehavior: 'smooth' }}>
			<body className={`bg-zinc-900 text-zinc-200 overflow-x-hidden`}>{children}</body>
		</html>
	);
}
