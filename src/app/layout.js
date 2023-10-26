import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

export const metadata = {
  title:        "My Ageas (BM)",
  description:  "Login Page for NextJS Learning!"
};

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