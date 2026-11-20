import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SITE_TITLE = 'SME Growth Circle | India’s MSME Business Growth Platform';
const SITE_DESCRIPTION =
  'SME Growth Circle Foundation is India’s city-wise MSME business growth platform connecting manufacturers, traders, and service providers with verified buyers.';

export const metadata = {
  metadataBase: new URL('https://www.growthcirclesme.com'),
  title: {
    default: SITE_TITLE,
    template: '%s | SME Growth Circle',
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'SME Growth Circle',
    'SME Growth Circle Foundation',
    'MSME Business Growth Platform',
    'Indian MSME Directory',
    'MSME Marketplace India',
    'Andhra Pradesh MSME Circle',
    'Buyer Seller Connect',
  ],
  alternates: {
    canonical: 'https://www.growthcirclesme.com/',
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: 'https://www.growthcirclesme.com/',
    siteName: 'SME Growth Circle',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: 'https://www.growthcirclesme.com/logo.jpg',
        width: 800,
        height: 800,
        alt: 'SME Growth Circle Foundation Official Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['https://www.growthcirclesme.com/logo.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: 'uYM8KsinE_g7DSKckazg5fckXiPzCBPvOpmds7Mu0yY',
  },
  other: {
    'msvalidate.01': '32CC5943C8D9FA146FC405E9C48CF0AF',
    'content-language': 'en-IN',
    language: 'English',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://www.growthcirclesme.com/#organization',
      name: 'SME Growth Circle',
      alternateName: 'SME Growth Circle Foundation',
      url: 'https://www.growthcirclesme.com/',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.growthcirclesme.com/logo.jpg',
      },
      email: 'growthcirclesme@gmail.com',
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: '+91-8121672244',
          email: 'growthcirclesme@gmail.com',
          contactType: 'customer support',
          areaServed: 'IN',
          availableLanguage: ['English', 'Telugu'],
        },
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://www.growthcirclesme.com/#website',
      url: 'https://www.growthcirclesme.com/',
      name: 'SME Growth Circle',
      description: SITE_DESCRIPTION,
      publisher: {
        '@id': 'https://www.growthcirclesme.com/#organization',
      },
      inLanguage: 'en-IN',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://www.growthcirclesme.com/#webpage',
      url: 'https://www.growthcirclesme.com/',
      name: SITE_TITLE,
      description: SITE_DESCRIPTION,
      isPartOf: {
        '@id': 'https://www.growthcirclesme.com/#website',
      },
      about: {
        '@id': 'https://www.growthcirclesme.com/#organization',
      },
      inLanguage: 'en-IN',
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta httpEquiv="content-language" content="en-IN" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Google+Sans:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

