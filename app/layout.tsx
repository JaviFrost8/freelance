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
  title:
    'Javier Gonzalez, desarrollador web freelance en Chiclana de la Frontera especializado en React y NextJS.',
  description:
    'Soy desarrollador web especializado en React y Next.js. Creo sitios modernos, rápidos y optimizados para ofrecer la mejor experiencia de usuario.',
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
