import type { Metadata } from 'next';
import './globals.css';
import { typeOutfit } from '@/functions/fonts';

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
      <body>{children}</body>
    </html>
  );
}
