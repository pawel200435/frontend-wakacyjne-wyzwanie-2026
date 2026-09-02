import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Kablammo } from 'next/font/google'
import { Handjet } from 'next/font/google'

import Link from "next/link";

const kablammo = Kablammo({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-kablammo',
})

const handjet = Handjet({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-handjet',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aplikacja Solvro",
  description: "Projekt Next.js",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${kablammo.variable} ${handjet.variable} $ h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
      <header className="w-full border-b border-slate-200 bg-white shadow-sm">
          <nav className="max-w-6xl mx-auto flex items-center justify-evenly px-6 py-3">
          
            <Link
              href="/"
              className="text-slate-600 hover:text-indigo-600 transition-colors"
            >
              Strona główna
            </Link>
            <Link
              href="/users"
              className="text-slate-600 hover:text-indigo-600 transition-colors"
            >
              Użytkownicy
            </Link>
            
          </nav>
        </header>  
        
        {children}
      </body>
    </html>
  );
}
