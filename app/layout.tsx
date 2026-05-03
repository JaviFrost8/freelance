import type { Metadata } from 'next';
import { Public_Sans, DM_Sans, Montserrat } from 'next/font/google';
import './globals.css';
import Script from 'next/script';

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
      'Desarrollo interfaces modernas, rápidas y enfocadas a resultados.',
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
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NH9P2CBP');
          `}
        </Script>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${publicSans.variable} ${dmSans.variable} ${montserrat.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NH9P2CBP"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
