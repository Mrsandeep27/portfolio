import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sandeep Pandey - Web Designer',
  description: 'Created with Sandeep Pandey',
  generator: 'Sandeep Pandey',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 👇 Add scroll-smooth here */}
      <body className="scroll-smooth">{children}</body>
    </html>
  );
}
