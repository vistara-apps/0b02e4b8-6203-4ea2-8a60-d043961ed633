import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RemixSplit - Automate Royalty Splits',
  description: 'Automate your royalty splits and license your remixes. Own your creations.',
  openGraph: {
    title: 'RemixSplit - Automate Royalty Splits',
    description: 'Automate your royalty splits and license your remixes. Own your creations.',
    url: 'https://remixsplit.app',
    siteName: 'RemixSplit',
    images: [
      {
        url: 'https://remixsplit.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'RemixSplit - Automate Royalty Splits',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
