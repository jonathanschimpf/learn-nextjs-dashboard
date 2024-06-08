import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Next.js Dashboard',
    default: 'Learn Next.js — Dashboard built with App Router',
  },
  description: 'Explore the foundations of Next.js by building a fully functional demo website that uses all of the latest features in this guided course.',
  metadataBase: new URL('https://learn-nextjs-dashboard-jonathanschimpf.vercel.app'),
  openGraph: {
    images: '/opengraph-image.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
