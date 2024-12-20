import type { Metadata } from 'next';
import './globals.css';
import { typeOutfit } from '@/functions/fonts';
import Sidenav from '@/components/sidenav/sidenav';
import SearchBar from '@/components/search-bar/search-bar';

export const metadata: Metadata = {
  title: 'Home | Entertainment app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={typeOutfit.className} lang="en">
      <body>
        <Sidenav />
        <SearchBar />
        {children}
      </body>
    </html>
  );
}
