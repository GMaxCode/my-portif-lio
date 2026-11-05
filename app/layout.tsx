import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfólio do Guilherme Gomes Máximo',
  description: 'Estudante de Análise e Desenvolvimento de Sistemas e futuro Data Engineer.',
  openGraph: {
    title: 'Portfólio do Guilherme Gomes Máximo',
    description: 'futuro Data Engineer · Análise e Desenvolvimento de Sistemas',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400..700;1,400..700&family=Inter+Tight:ital,wght@0,300..800;1,300..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
