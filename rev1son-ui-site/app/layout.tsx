import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Space_Mono } from "next/font/google";
import "./globals.css";
// import Head from "next/head";
import Header from "./components/header/Header";

const inter = Inter({ subsets: ["latin"] });
const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata: Metadata = {
  title: "rev1son-ui",
  description: "Official website for rev1son-ui component library.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <Head>
        <link rel="icon" href="/switch.png" type="image/png" />
      </Head> */}
      <body className={spaceMono.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
