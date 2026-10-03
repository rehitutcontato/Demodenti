import type {Metadata} from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Atelier Oral Lumina • Odontologia Estética & Reabilitação | Cambuí - Campinas',
  description: 'Arquitetura do sorriso, lentes de contato em porcelana ultrafinas (0.2mm) e reabilitação oral guiada por escaneamento 3D e proporção áurea. Cambuí, Campinas.',
  openGraph: {
    title: 'Atelier Oral Lumina • Odontologia Estética & Reabilitação',
    description: 'A exatidão da tecnologia digital esculpida na naturalidade da porcelana artesanal. Escaneamento intraoral iTero 5D e visagismo.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Atelier Oral Lumina • Odontologia Estética & Reabilitação',
    description: 'A exatidão da tecnologia digital esculpida na naturalidade da porcelana artesanal.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${plusJakarta.variable} dark scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="bg-[#050505] text-[#E8E6E1] antialiased selection:bg-[#C5A880]/30 selection:text-[#FFF8EE]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
