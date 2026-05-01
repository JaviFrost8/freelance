import type { Metadata } from 'next';
import { Public_Sans, DM_Sans, Montserrat } from 'next/font/google';
import './globals.css';

const publicSans = Public_Sans({
  variable: '--font-public-sans',
  subsets: ['latin'],
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
});

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://javidev.es'),

  title: 'JaviDev | Frontend Developer (React & Next.js)',
  description:
    'Desarrollador frontend especializado en React, Next.js y TypeScript. Creo interfaces modernas, rápidas y enfocadas a conversión.',

  alternates: {
    canonical: 'https://javidev.es',
  },

  openGraph: {
    type: 'website',
    url: 'https://javidev.es',
    siteName: 'JaviDev',

    title: 'Desarrollador web en Chiclana',
    description:
      'Desarrollo interfaces modernas, rápidas y enfocadas a resultados.',

    images: [
      {
        url: 'https://javidev.es/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'JaviDev - Frontend Developer',
      },
    ],

    locale: 'es_ES',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'JaviDev | Frontend Developer',
    description:
      'React, Next.js y TypeScript. Interfaces modernas y optimizadas.',
    images: ['https://javidev.es/og-image.jpg'],
  },

  keywords: [
    'frontend developer',
    'react developer',
    'next.js developer',
    'typescript',
    'portfolio desarrollador',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${publicSans.variable} ${dmSans.variable} ${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
