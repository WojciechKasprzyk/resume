import type { Metadata } from "next";
import { Inter } from "next/font/google";
//TODO split globals css
import "./globals.css";
import { cookies, headers } from "next/headers";
import Head from "next/head";
import { Theme } from "./types";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wojciech Kasprzyk - Résumé",
  description: "Senior Frontend Developer",
  openGraph: {
    title: "Wojciech Kasprzyk - Résumé",
    description: "Senior Frontend Developer",
    url: "https://wojciech-kasprzyk.vercel.app",
    siteName: "Wojciech Kasprzyk - Résumé",
    images: [
      {
        url: "https://wojciech-kasprzyk.vercel.app/thumbnail.jpg",
        width: 1200,
        height: 630,
        alt: "Wojciech Kasprzyk, Senior Frontend Developer",
      },
    ],
    type: "website",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headerList = await headers();
  const cookieStore = await cookies();

  const prefersColorScheme = headerList.get('sec-ch-prefers-color-scheme');
  const themeCookie = cookieStore.get('theme')?.value;

  const theme  = themeCookie || prefersColorScheme || '' as Theme;

  return (
    <html lang="en">
    <Head>
      <link rel="shortcut icon" href="/favicon.ico"/>
    </Head>
    {/*suppressHydrationWarning*/}
      <body className={`${inter.className} ${theme}`}>
        {children}
      </body>
    </html>
  );
}
