import Head   from "next/head";
import Script from "next/script";

import "./globals.css";
import "./globals.scss";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<body>{children}</body>
		</html>
	);
};