import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { siteContent } from '@/content/site';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteContent.metadata.siteUrl),
  title: siteContent.metadata.title,
  description: siteContent.metadata.description,
  alternates: {
    canonical: siteContent.metadata.canonical,
  },
  authors: [{ name: siteContent.owner.name, url: siteContent.metadata.siteUrl }],
  creator: siteContent.owner.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteContent.metadata.siteUrl,
    title: siteContent.metadata.title,
    description: siteContent.metadata.description,
    siteName: `${siteContent.owner.name} Portfolio`,
    images: [
      {
        url: siteContent.metadata.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteContent.owner.name} - AI/ML Engineer`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteContent.metadata.title,
    description: siteContent.metadata.description,
    images: [siteContent.metadata.ogImage],
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: '/icon.svg',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: siteContent.owner.name,
  jobTitle: 'AI/ML Engineer',
  description: siteContent.metadata.description,
  url: siteContent.metadata.siteUrl,
  sameAs: [siteContent.owner.github],
  email: siteContent.owner.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bengaluru',
    addressRegion: 'Karnataka',
    addressCountry: 'India',
  },
  knowsLanguage: siteContent.owner.languages,
  knowsAbout: [
    'LLMs',
    'Retrieval-Augmented Generation (RAG)',
    'AI Agents',
    'Natural Language Processing (NLP)',
    'Prompt Engineering',
    'Token Optimization',
    'Python',
    'FastAPI',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Anti-flash theme script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`,
          }}
        />
        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans min-h-screen flex flex-col bg-stone-50 text-zinc-900 dark:bg-[#090d16] dark:text-zinc-100 selection:bg-amber-500/20 selection:text-amber-700 dark:selection:text-amber-300 transition-colors duration-200`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-amber-500 text-zinc-950 font-medium rounded-md shadow-lg outline-none ring-2 ring-amber-600"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="flex-1">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
